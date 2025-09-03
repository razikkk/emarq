"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "#3E2F56",
  gradientBackgroundEnd = "#3E2F56",
  firstColor = "232, 193, 197",
  secondColor = "232, 193, 197",
  thirdColor = "232, 193, 197",
  fourthColor = "232, 193, 197",
  fifthColor = "232, 193, 197",
  pointerColor = "232, 193, 197",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  // Set CSS variables
  useEffect(() => {
    document.body.style.setProperty("--gradient-background-start", gradientBackgroundStart);
    document.body.style.setProperty("--gradient-background-end", gradientBackgroundEnd);
    document.body.style.setProperty("--first-color", firstColor);
    document.body.style.setProperty("--second-color", secondColor);
    document.body.style.setProperty("--third-color", thirdColor);
    document.body.style.setProperty("--fourth-color", fourthColor);
    document.body.style.setProperty("--fifth-color", fifthColor);
    document.body.style.setProperty("--pointer-color", pointerColor);
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setMouseX(event.clientX / window.innerWidth - 0.5); // -0.5 to 0.5
    setMouseY(event.clientY / window.innerHeight - 0.5);
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div
    onMouseMove={handleMouseMove}
    className={cn(
      "fixed inset-0 w-full h-full overflow-hidden top-0 left-0 -z-10 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
      containerClassName
    )}
  >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Content */}
      <div className={cn("", className)}>{children}</div>

      {/* Blobs */}
      <div
        className={cn(
          "gradients-container h-full w-full blur-lg",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
        )}
      >
        {/* First blob - top left */}
        <div
          className={cn(
            `absolute [background:radial-gradient(circle,_var(--first-color)_0,_transparent_70%)]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] animate-[blob_20s_infinite]`,
            `top-[-20%] left-[-20%]`
          )}
          style={{
            transform: `translate(${mouseX * 40}px, ${mouseY * 40}px)`,
          }}
        ></div>

        {/* Second blob - bottom right */}
        <div
          className={cn(
            `absolute [background:radial-gradient(circle,_rgba(var(--second-color),_0.8)_0,_transparent_70%)]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] animate-[blob_25s_infinite]`,
            `bottom-[-20%] right-[-20%]`
          )}
          style={{
            transform: `translate(${mouseX * -30}px, ${mouseY * -30}px)`,
          }}
        ></div>

        {/* Third blob - top right */}
        <div
          className={cn(
            `absolute [background:radial-gradient(circle,_rgba(var(--third-color),_0.7)_0,_transparent_70%)]`,
            `[mix-blend-mode:var(--blending-value)] w-[calc(var(--size)/1.5)] h-[calc(var(--size)/1.5)] animate-[blob_18s_infinite]`,
            `top-[-15%] right-[10%]`
          )}
          style={{
            transform: `translate(${mouseX * 20}px, ${mouseY * 20}px)`,
          }}
        ></div>
      </div>
{/* 
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: scale(1) translate(0, 0);
          }
          33% {
            transform: scale(1.1) translate(10px, -10px);
          }
          66% {
            transform: scale(0.9) translate(-10px, 10px);
          }
          100% {
            transform: scale(1) translate(0, 0);
          }
        }
      `}</style> */}
 
    </div>
  );
};
