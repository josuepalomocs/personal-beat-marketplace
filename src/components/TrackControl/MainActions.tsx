import {
  ArrowDownTrayIcon,
  ArrowPathRoundedSquareIcon,
  ArrowUturnLeftIcon,
  BackwardIcon,
  ForwardIcon,
  PauseCircleIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";

interface MainControlProps {}

export default function MainActions() {
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlayAndPauseButtonClick() {
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="flex space-x-3">
      <button className="text-neutral-300 w-[40px]">
        <ArrowDownTrayIcon className="w-4 mx-auto" />
      </button>
      <button className="text-neutral-300 w-[40px]">
        <BackwardIcon className="w-4 mx-auto" />
      </button>
      <button
        className="text-neutral-100 w-[40px]"
        onClick={handlePlayAndPauseButtonClick}
      >
        {isPlaying ? (
          <PlayCircleIcon className="w-12 mx-auto" />
        ) : (
          <PauseCircleIcon className="w-12 mx-auto" />
        )}
      </button>
      <button className="text-neutral-300 w-[40px]">
        <ForwardIcon className="w-4 mx-auto" />
      </button>
      <button className="text-neutral-300 w-[40px]">
        <ArrowPathRoundedSquareIcon className="w-4 mx-auto" />
      </button>
    </div>
  );
}
