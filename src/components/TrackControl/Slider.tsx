import { formatAudioTimestamp } from "@/utility/time";
import { useEffect, useState } from "react";

interface SliderProps {
  timeElapsed: number;
  audioLength: number;
}

export default function Slider({ timeElapsed, audioLength }: SliderProps) {
  const sliderFillPercentage = (timeElapsed / audioLength) * 100;

  return (
    <div className="flex items-center space-x-3 text-sm text-neutral-400">
      <p className="">{formatAudioTimestamp(timeElapsed)}</p>
      <div className="relative w-96 h-1 bg-neutral-600 rounded">
        <div
          className={`h-1 bg-neutral-100 rounded`}
          style={{
            width: `${
              sliderFillPercentage < 100 ? sliderFillPercentage : 100
            }%`,
          }}
        ></div>
      </div>
      <p className="">{formatAudioTimestamp(audioLength)}</p>
    </div>
  );
}
