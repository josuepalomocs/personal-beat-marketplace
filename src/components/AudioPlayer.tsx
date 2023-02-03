// @ts-ignore
import { Pause, Play, SkipBack, SkipForward } from "feather-icons-react";
import { formatAudioTimestamp } from "@/utility/time";
import useArtworkPlayer from "@/hooks/useArtworkPlayer";

interface AudioPlayerProps {
  audioSrc: string;
}

export default function AudioPlayer({ audioSrc }: AudioPlayerProps) {
  const {
    audioRef,
    isPlaying,
    togglePlayPause,
    currentTime,
    handleSliderChange,
  } = useArtworkPlayer({ audioSrc });

  return (
    <div className="flex flex-col w-[600px]">
      <audio ref={audioRef} preload="metadata"></audio>
      <div className="flex justify-center items-center space-x-4 text-sm text-neutral-300">
        <button className="text-neutral-300 group" onClick={togglePlayPause}>
          {isPlaying ? (
            <Pause className="w-[16px] fill-neutral-300 group-hover:text-white group-hover:fill-white" />
          ) : (
            <Play className="w-[16px] fill-neutral-300 group-hover:text-white group-hover:fill-white" />
          )}
        </button>
        <input
          className="w-full h-[1px] accent-emerald-600 border-0"
          type="range"
          min={0}
          max={
            audioRef.current
              ? isNaN(audioRef.current.duration)
                ? 100
                : audioRef.current.duration
              : 100
          }
          value={currentTime}
          onChange={handleSliderChange}
        />
        <div className="flex flex-col">
          <p className="min-w-[30px] text-right">
            {formatAudioTimestamp(Math.trunc(currentTime))}
          </p>
          <p className="min-w-[30px] text-right text-xs text-neutral-400">
            {formatAudioTimestamp(
              Math.trunc(audioRef.current ? audioRef.current.duration : 0)
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
