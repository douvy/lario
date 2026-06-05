import { useEffect, useRef } from 'react';

export default function AmbientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const lines = 20;
    const pulseWidth = 60;

    const draw = () => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);

      ctx.clearRect(0, 0, w, h);

      const pulsePos = (time * 0.8) % (w + pulseWidth * 2) - pulseWidth;

      for (let i = 0; i < lines; i++) {
        const baseY = 30 + (i * 8);
        const alpha = 0.08 + (i === 0 ? 0.06 : 0);
        const isTopLine = i === 0;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(37, 99, 235, ${alpha * 2.5})`;
        ctx.lineWidth = 0.5;

        for (let x = 0; x <= w; x += 2) {
          const normalX = x / w;
          const wave = Math.sin((time * 0.015) + (normalX * 3) + (i * 0.15)) * 2;
          const y = baseY + wave;

          // Pulse brightening on top line
          if (isTopLine && x > pulsePos && x < pulsePos + pulseWidth) {
            ctx.stroke();
            ctx.beginPath();
            ctx.strokeStyle = `rgba(37, 99, 235, 0.5)`;
            ctx.moveTo(x, y);
            continue;
          } else if (isTopLine && x === Math.ceil(pulsePos + pulseWidth)) {
            ctx.stroke();
            ctx.beginPath();
            ctx.strokeStyle = `rgba(37, 99, 235, ${alpha * 2.5})`;
          }

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      }

      time++;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
