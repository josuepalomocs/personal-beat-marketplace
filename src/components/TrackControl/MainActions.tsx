import {
  ArrowDownTrayIcon,
  ArrowPathRoundedSquareIcon,
  ArrowUturnLeftIcon,
  BackwardIcon,
  ForwardIcon,
  PauseCircleIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { useContext, useState } from "react";
import { TrackPlayerContext } from "@/context/TrackPlayerProvider";

interface MainControlProps {}

export default function MainActions() {
  const {
    isPlaying,
    playTrack,
    pauseTrack,
    selectPreviousTrack,
    selectNextTrack,
    selectedTrackIndex,
  } = useContext(TrackPlayerContext);

  function togglePlay() {
    if (!isPlaying) {
      return playTrack();
    }
    pauseTrack();
  }

  return (
    <div className="flex space-x-3">
      <button className="text-neutral-300 w-[40px]">
        <ArrowDownTrayIcon className="w-4 mx-auto" />
      </button>
      <button
        className="text-neutral-300 w-[40px]"
        onClick={selectPreviousTrack}
      >
        <BackwardIcon className="w-4 mx-auto" />
      </button>
      <button className="text-neutral-100 w-[40px]" onClick={togglePlay}>
        {!isPlaying ? (
          <PlayCircleIcon className="w-12 mx-auto" />
        ) : (
          <PauseCircleIcon className="w-12 mx-auto" />
        )}
      </button>
      <button className="text-neutral-300 w-[40px]" onClick={selectNextTrack}>
        <ForwardIcon className="w-4 mx-auto" />
      </button>
      <button className="text-neutral-300 w-[40px]">
        <ArrowPathRoundedSquareIcon className="w-4 mx-auto" />
      </button>
    </div>
  );
}
