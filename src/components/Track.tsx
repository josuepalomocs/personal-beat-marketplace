import { Track as TrackType } from "@/types";
import { formatDate } from "@/utility/dayjs";
import { formatAudioTimestamp } from "@/utility/time";
import { PauseCircleIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import { useContext, useRef, useState } from "react";
import useTrackPlayer from "@/hooks/useTrackPlayer";
import { TrackPlayerContext } from "@/context/TrackPlayerProvider";

interface TrackProps extends TrackType {
  index: number;
}

export default function Track(props: TrackProps) {
  const {
    index,
    title,
    audioSrc,
    imageSrc,
    datePosted,
    audioLength,
    shareHyperlink,
    downloadHyperLink,
  } = props;

  const {
    selectedTrackIndex,
    setSelectedTrackIndex,
    selectTrack,
    isPlaying,
    togglePlayAudio,
    audioRef,
  } = useContext(TrackPlayerContext) || {};

  console.log(selectedTrackIndex);

  return (
    <div className="flex justify-between items-center w-96 text-sm">
      <audio
        src={audioSrc}
        ref={selectedTrackIndex === index ? audioRef : undefined}
      />
      <button
        className=""
        onClick={() => {
          if (selectTrack) {
            selectTrack(index);
          }
        }}
      >
        {isPlaying && selectedTrackIndex === index ? (
          <PauseCircleIcon className="w-8" />
        ) : (
          <PlayCircleIcon className="w-8" />
        )}
      </button>
      <p>{title}</p>
      <p>{formatDate(datePosted, "MMM DD | YYYY")}</p>
      <p>{formatAudioTimestamp(audioLength)}</p>
    </div>
  );
}
