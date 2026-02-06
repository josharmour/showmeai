import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Flame, Snowflake } from 'lucide-react';

export const IntensitySlider: React.FC = () => {
  const { intensity, setIntensity } = useTheme();

  return (
    <div className="flex items-center gap-2 group">
      <Snowflake
        size={14}
        className="opacity-50 group-hover:opacity-80 transition-opacity shrink-0"
        style={{ color: 'var(--accent-color)' }}
      />
      <div className="relative w-24 h-8 flex items-center">
        {/* Track background */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
          <div className="w-full h-1.5 rounded-full bg-[var(--secondary-color)] overflow-hidden">
            {/* Filled portion */}
            <div
              className="h-full rounded-full transition-all duration-150"
              style={{
                width: `${intensity}%`,
                background: `linear-gradient(90deg, var(--accent-color), var(--accent-color))`,
                boxShadow: intensity > 30
                  ? `0 0 ${Math.floor(intensity / 10)}px var(--accent-color)`
                  : 'none',
              }}
            />
          </div>
        </div>
        {/* Thumb */}
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
            ? `drop-shadow(0 0 ${Math.floor(intensity / 20)}px var(--accent-color))`
            : 'none',
        }}
      />
    </div>
  );
};
