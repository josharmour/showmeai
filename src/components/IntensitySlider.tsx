import React, { useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Flame, Snowflake } from 'lucide-react';

/** Tiny canvas that draws a per-theme animated glow on the slider track */
const TrackCanvas: React.FC<{ value: number; width: number }> = ({ value, width }) => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const valRef = useRef(value);
  useEffect(() => { valRef.current = value; }, [value]);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d')!;
    c.width = width; c.height = 20;
    let id = 0, frame = 0;

    const draw = () => {
      id = requestAnimationFrame(draw);
      const v = valRef.current / 100;
      if (v < 0.05) { ctx.clearRect(0, 0, c.width, c.height); return; }
      frame++;
      ctx.clearRect(0, 0, c.width, c.height);
      const filled = v * c.width;

      // Theme-specific track animations
      if (theme === 'rave') {
        const hue = (frame * 4) % 360;
        const grad = ctx.createLinearGradient(0, 0, filled, 0);
        grad.addColorStop(0, `hsla(${hue},100%,60%,0.9)`);
        grad.addColorStop(0.5, `hsla(${(hue + 120) % 360},100%,60%,0.8)`);
        grad.addColorStop(1, `hsla(${(hue + 240) % 360},100%,60%,0.9)`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 8, filled, 4);
        // sparkle dots
        for (let i = 0; i < Math.floor(v * 5); i++) {
          const sx = Math.random() * filled;
          ctx.fillStyle = `hsla(${(hue + i * 60) % 360},100%,80%,${0.5 + Math.random() * 0.5})`;
          ctx.fillRect(sx, 7 + Math.random() * 6, 2, 2);
        }
      } else if (theme === 'neon') {
        const pulse = 0.6 + Math.sin(frame * 0.08) * 0.4;
        ctx.fillStyle = `rgba(217,70,239,${0.7 * pulse})`;
        ctx.fillRect(0, 8, filled, 4);
        ctx.fillStyle = `rgba(0,255,204,${0.3 * pulse})`;
        ctx.fillRect(0, 7, filled, 6);
      } else if (theme === 'hacker') {
        ctx.fillStyle = `rgba(0,255,0,${0.8})`;
        // scanline effect
        for (let x = 0; x < filled; x += 4) {
          const on = ((x + frame) % 8) < 5;
          if (on) ctx.fillRect(x, 9, 3, 2);
        }
      } else if (theme === 'toxic') {
        const grad = ctx.createLinearGradient(0, 0, filled, 0);
        const shift = Math.sin(frame * 0.05) * 0.3 + 0.5;
        grad.addColorStop(0, `rgba(147,51,234,${shift})`);
        grad.addColorStop(1, `rgba(184,255,0,${1 - shift})`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 8, filled, 4);
        // drip effect
        if (v > 0.4) {
          for (let i = 0; i < 3; i++) {
            const dx = filled * (0.3 + i * 0.25);
            const dh = Math.sin(frame * 0.1 + i) * 3 + 3;
            ctx.fillStyle = 'rgba(184,255,0,0.3)';
            ctx.fillRect(dx, 10, 2, dh * v);
          }
        }
      } else if (theme === 'candy') {
        const grad = ctx.createLinearGradient(0, 0, filled, 0);
        grad.addColorStop(0, '#ec4899');
        grad.addColorStop(0.5, '#f472b6');
        grad.addColorStop(1, '#a855f7');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 8, filled, 4);
        // bouncing dots
        for (let i = 0; i < Math.floor(v * 4); i++) {
          const bx = filled * ((i + 1) / 5);
          const by = 10 + Math.sin(frame * 0.12 + i * 1.5) * 3;
          ctx.beginPath();
          ctx.arc(bx, by, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = ['#ec4899', '#facc15', '#34d399', '#a855f7'][i % 4];
          ctx.fill();
        }
      } else {
        // dark / light — subtle pulse
        const alpha = 0.5 + Math.sin(frame * 0.04) * 0.2 * v;
        ctx.fillStyle = theme === 'light'
          ? `rgba(37,99,235,${alpha})`
          : `rgba(59,130,246,${alpha})`;
        ctx.fillRect(0, 8, filled, 4);
      }
    };
    id = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(id);
  }, [theme, width]);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ width, height: 20 }} />;
};

export const IntensitySlider: React.FC = () => {
  const { intensity, setIntensity } = useTheme();
  const trackW = 96; // w-24 = 96px

  return (
    <div className="flex items-center gap-2 group">
      <Snowflake
        size={14}
        className="opacity-50 group-hover:opacity-80 transition-opacity shrink-0"
        style={{ color: 'var(--accent-color)' }}
      />
      <div className="relative w-24 h-8 flex items-center">
        <TrackCanvas value={intensity} width={trackW} />
        {/* fallback track bg */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
          <div className="w-full h-1.5 rounded-full bg-[var(--secondary-color)] overflow-hidden" />
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={intensity}
          onChange={(e) => setIntensity(Number(e.target.value))}
          className="intensity-slider absolute inset-0 w-full appearance-none bg-transparent cursor-pointer z-10"
          aria-label="Animation intensity"
        />
      </div>
      <Flame
        size={14}
        className="shrink-0 transition-all"
        style={{
          color: 'var(--accent-color)',
          opacity: 0.4 + (intensity / 100) * 0.6,
          filter: intensity > 70
            ? `drop-shadow(0 0 ${(intensity / 20) | 0}px var(--accent-color))`
            : 'none',
        }}
      />
    </div>
  );
};
