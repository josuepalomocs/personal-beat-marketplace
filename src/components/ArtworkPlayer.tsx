// @ts-ignore
import { SkipBack, SkipForward, Play, Pause } from "feather-icons-react";
import { useContext } from "react";
import { ArtworkPlayerContext } from "@/context/ArtworkPlayerProvider";
import { formatAudioTimestamp } from "@/utility/time";

interface AudioPlayerProps {}

export default function ArtworkPlayer({}: AudioPlayerProps) {
  const artworkPlayer = useContext(ArtworkPlayerContext);

  if (artworkPlayer) {
    const {
      isPlaying,
      togglePlayPause,
      selectPreviousArtwork,
      selectNextArtwork,
      audioRef,
      currentTime,
      duration,
      handleSliderChange,
    } = artworkPlayer;

    return (
      <div className="flex flex-col w-[600px]">
        <audio ref={audioRef} preload="metadata"></audio>
        <div className="flex justify-center space-x-2 [&>button]:p-2">
          <button
            className="text-neutral-300 hover:fill-white group"
            onClick={selectPreviousArtwork}
          >
            <SkipBack className="w-[12px] fill-neutral-300 group-hover:text-white group-hover:fill-white" />
          </button>
          <button className="text-neutral-300 group" onClick={togglePlayPause}>
            {isPlaying ? (
              <Pause className="w-[16px] fill-neutral-300 group-hover:text-white group-hover:fill-white" />
            ) : (
              <Play className="w-[16px] fill-neutral-300 group-hover:text-white group-hover:fill-white" />
            )}
          </button>
          <button
            className="text-neutral-300 hover:fill-white group"
            onClick={selectNextArtwork}
          >
            <SkipForward className="w-[12px] fill-neutral-300 group-hover:text-white group-hover:fill-white" />
          </button>
        </div>
        <div className="flex justify-center items-center space-x-4 text-sm text-neutral-300">
          <p className="min-w-[32px]">
            {formatAudioTimestamp(Math.trunc(currentTime))}
          </p>
          <input
            className="w-full h-[2px] accent-emerald-600 border-0"
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
          <p className="min-w-[32px]">
            {formatAudioTimestamp(
              Math.trunc(audioRef.current ? audioRef.current.duration : 0)
            )}
          </p>
        </div>
      </div>
    );
  }

  return <></>;
}
