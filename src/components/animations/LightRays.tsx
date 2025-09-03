"use client";
import { useEffect, useRef } from "react";

export default function LightRays() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { alpha: true }) as WebGLRenderingContext;
    if (!gl) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const vertexShaderSource = `
      attribute vec2 aPosition;
      varying vec2 vUv;
      void main() {
        vUv = aPosition * 0.5 + 0.5;
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

    const fragmentShaderSource = `
      precision highp float;
      varying vec2 vUv;
      uniform vec2 iResolution;
      uniform float iTime;

      void main() {
        vec2 uv = vUv;
        vec2 center = vec2(0.5, 0.0); // ⬅ Top-center instead of middle
        vec2 dir = uv - center;
        float angle = atan(dir.y, dir.x);
        float dist = length(dir);
    
        // Ray patterns
        float rays1 = sin(angle * 10.0 + iTime * 0.5) * 0.5 + 0.5;
        float rays2 = sin(angle * 6.0 - iTime * 0.3) * 0.5 + 0.5;
    
        // Intensity mask (fade near center and edges)
        float intensity = (rays1 * 0.5 + rays2 * 0.4) * smoothstep(0.5, 0.0, dist);
    
        // Fixed color E8C1C5
        vec3 rayColor = vec3(232.0/255.0, 193.0/255.0, 197.0/255.0);
    
        gl_FragColor = vec4(rayColor * intensity, intensity);
    }
    `;

    function compileShader(source: string, type: number) {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER)!;
    const fragmentShader = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER)!;

    const program = gl.createProgram()!;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const vertices = new Float32Array([
      -1, -1, 1, -1, -1, 1,
      -1, 1, 1, -1, 1, 1,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const aPosition = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const iResolution = gl.getUniformLocation(program, "iResolution");
    const iTime = gl.getUniformLocation(program, "iTime");

    let startTime = performance.now();

    function render() {
      const now = performance.now();
      const time = (now - startTime) / 1000;

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.uniform2f(iResolution, canvas.width, canvas.height);
      gl.uniform1f(iTime, time);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      requestAnimationFrame(render);
    }

    render();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}
