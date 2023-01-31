import { Track as TrackType } from "@/types";
import { formatDate } from "@/utility/dayjs";
import { formatAudioTimestamp } from "@/utility/time";
import { PauseCircleIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import { useContext, useRef, useState } from "react";
import useTrackPlayer from "@/hooks/useTrackPlayer";
import { TrackPlayerContext } from "@/context/TrackPlayerProvider";

interface TrackProps extends TrackType {}

export default function Track(props: TrackProps) {
  const {
    id,
    title,
    audioSrc,
    imageSrc,
    datePosted,
    audioLength,
    shareHyperlink,
    downloadHyperLink,
  } = props;

  const {
    tracks,
    selectedTrack,
    selectTrackById,
    isPlaying,
    playTrack,
    pauseTrack,
    resetCurrentTimeToStart,
    audioRef,
  } = useContext(TrackPlayerContext) || {};

  function handleClick() {
    if (!selectedTrack || selectedTrack.id !== id) {
      return selectTrackById(id);
    }
    if (!isPlaying) {
      return playTrack();
    }
    pauseTrack();
  }

  return (
    <div className="flex justify-between items-center w-96 text-xs">
      <button onClick={handleClick}>
        <div className="w-16 h-16 border border-neutral-600"></div>
      </button>
      <p>{title.toUpperCase()}</p>
      <p>{formatDate(datePosted, "MMM DD YYYY").toUpperCase()}</p>
      <p>{formatAudioTimestamp(audioLength)}</p>
    </div>
  );
}
