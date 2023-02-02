import { ArtworkPlayer } from "@/types";
import { ChangeEvent, useEffect, useRef, useState } from "react";

interface UseArtworkPlayerParams {
  audioSrc: string;
}

export default function useArtworkPlayer({
  audioSrc,
}: UseArtworkPlayerParams): ArtworkPlayer {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isAudioRefLoaded, setIsAudioRefLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = audioSrc;
      audioRef.current.onloadedmetadata = () => {
        setDuration(audioRef.current!.duration);
        setIsAudioRefLoaded(true);
      };

      return;
    }
    setIsAudioRefLoaded(false);
  }, [audioRef]);

  useEffect(() => {
    if (audioRef.current?.readyState) {
      setDuration(audioRef.current.duration);
    }
  }, [audioRef.current?.readyState]);

  useEffect(() => {
    if (isAudioRefLoaded && !isPlaying) {
      audioRef.current!.pause();
      return;
    }
    if (isAudioRefLoaded && isPlaying) {
      audioRef.current!.play().catch((error) => console.log(error));
      const intervalId = setInterval(() => {
        if (audioRef.current!.currentTime >= audioRef.current!.duration) {
          setIsPlaying(false);
          return;
        }
        setCurrentTime(audioRef.current!.currentTime);
      }, 100);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isPlaying]);

  function togglePlayPause() {
    if (!isPlaying) {
      setIsPlaying(true);
      return;
    }
    setIsPlaying(false);
  }

  function handleSliderChange(e: ChangeEvent<HTMLInputElement>) {
    if (isAudioRefLoaded) {
      audioRef.current!.currentTime = e.target.valueAsNumber;
      setCurrentTime(e.target.valueAsNumber);
    }
  }

  return {
    isPlaying,
    togglePlayPause,
    audioRef,
    currentTime,
    duration,
    handleSliderChange,
  };
}
