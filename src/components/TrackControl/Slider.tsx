import { formatAudioTimestamp } from "@/utility/time";
import React from "react";

interface SliderProps {
  min: number;
  max: number;
  value: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Slider({ min, max, value, handleChange }: SliderProps) {
  return (
    <div className="flex items-center space-x-3 text-xs text-neutral-400">
      <p className="">{formatAudioTimestamp(Math.trunc(value))}</p>
      <input
        className="w-96 h-0.5 accent-neutral-600"
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
      <p className="">{formatAudioTimestamp(max)}</p>
    </div>
  );
}
