import MainActions from "@/components/TrackControl/MainActions";
import Slider from "@/components/TrackControl/Slider";
import React, { SyntheticEvent, useContext, useEffect, useState } from "react";
import useTrackPlayer from "@/hooks/useTrackPlayer";
import { TrackPlayerContext } from "@/context/TrackPlayerProvider";

interface TrackControlProps {}

export default function TrackControl({}: TrackControlProps) {
  const [currentTime, setCurrentTime] = useState(0);
  const { audioRef } = useContext(TrackPlayerContext);

  const audioDuration = Math.trunc(audioRef.current?.duration) || 0;

  function handleOnTimeUpdate(e: SyntheticEvent<HTMLAudioElement>) {
    setCurrentTime(Math.trunc(e.currentTarget.currentTime));
  }

  function handleSliderChange(e: React.ChangeEvent<HTMLInputElement>) {
    audioRef.current.currentTime = e.target.value;
  }

  return (
    <div className="fixed bottom-0 flex flex-col justify-center items-center space-y-3 w-screen h-36">
      <audio
        className="w-0 h-0"
        src="/artwork/0/0.wav"
        ref={audioRef}
        onTimeUpdate={handleOnTimeUpdate}
      />
      <MainActions />
      <Slider
        min={0}
        max={audioDuration}
        value={currentTime}
        handleChange={handleSliderChange}
      />
    </div>
  );
}
