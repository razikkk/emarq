'use client';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './ImageTrail.css'

function lerp(a: number, b: number, n: number) {
  return (1 - n) * a + n * b;
}

function getLocalPointerPos(
  e: MouseEvent | TouchEvent,
  rect: DOMRect
): { x: number; y: number } {
  let clientX = 0,
    clientY = 0;
  if ('touches' in e && e.touches.length > 0) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else if ('clientX' in e) {
    clientX = e.clientX;
    clientY = e.clientY;
  }
  return { x: clientX - rect.left, y: clientY - rect.top };
}

function getMouseDistance(p1: { x: number; y: number }, p2: { x: number; y: number }) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.hypot(dx, dy);
}

class ImageItem {
  DOM: { el: HTMLDivElement; inner: HTMLDivElement | null };
  rect: DOMRect | null = null;

  constructor(DOM_el: HTMLDivElement) {
    this.DOM = { el: DOM_el, inner: DOM_el.querySelector('.content__img-inner') };
    this.getRect();
    window.addEventListener('resize', this.getRect);
  }

  getRect = () => {
    if (this.DOM.el) this.rect = this.DOM.el.getBoundingClientRect();
  };
}

type MousePos = { x: number; y: number };

class ImageTrailVariant1 {
  container: HTMLDivElement;
  images: ImageItem[];
  imagesTotal: number;
  imgPosition = 0;
  zIndexVal = 1;
  activeImagesCount = 0;
  isIdle = true;
  threshold = 80;
  mousePos: MousePos = { x: 0, y: 0 };
  lastMousePos: MousePos = { x: 0, y: 0 };
  cacheMousePos: MousePos = { x: 0, y: 0 };

  constructor(container: HTMLDivElement) {
    this.container = container;
    this.images = [...container.querySelectorAll<HTMLDivElement>('.content__img')].map(
      img => new ImageItem(img)
    );
    this.imagesTotal = this.images.length;

    const handlePointerMove = (ev: MouseEvent | TouchEvent) => {
      const rect = this.container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };

    const initRender = (ev: MouseEvent | TouchEvent) => {
      const rect = this.container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };

      // Recalculate all image rects after render
      this.images.forEach(img => img.getRect());

      requestAnimationFrame(() => this.render());

      container.removeEventListener('mousemove', initRender);
      container.removeEventListener('touchmove', initRender);
    };

    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove);
    container.addEventListener('mousemove', initRender);
    container.addEventListener('touchmove', initRender);
  }

  render = () => {
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }

    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;

    requestAnimationFrame(() => this.render());
  };

  showNextImage() {
    this.zIndexVal++;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    if (!img.rect) img.getRect();

    gsap.killTweensOf(img.DOM.el);
    gsap.timeline({
      onStart: () => this.onImageActivated(),
      onComplete: () => this.onImageDeactivated()
    })
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          scale: 1,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - (img.rect?.width || 0) / 2,
          y: this.cacheMousePos.y - (img.rect?.height || 0) / 2
        },
        {
          duration: 0.4,
          ease: 'power1',
          x: this.mousePos.x - (img.rect?.width || 0) / 2,
          y: this.mousePos.y - (img.rect?.height || 0) / 2
        },
        0
      )
      .to(
        img.DOM.el,
        {
          duration: 0.4,
          ease: 'power3',
          opacity: 0,
          scale: 0.2
        },
        0.4
      );
  }

  onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }

  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) this.isIdle = true;
  }
}

const variantMap: Record<number, any> = { 1: ImageTrailVariant1 };

interface ImageTrailProps {
  items?: string[];
  variant?: number;
}

export default function ImageTrail({ items = [], variant = 1 }: ImageTrailProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || items.length === 0) return;
    const Cls = variantMap[variant] || variantMap[1];
    const instance = new Cls(containerRef.current);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', instance.images.forEach(img => img.getRect));
    };
  }, [variant, items]);

  return (
    <div className="content" ref={containerRef}>
      {items.map((url, i) => (
        <div className="content__img" key={i}>
          <div
            className="content__img-inner"
            style={{
              backgroundImage: `url(${url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>
      ))}
    </div>
  );
}
