import { Artwork, ArtworkPlayer } from "@/types";
import {
  ChangeEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";

interface UseArtworkPlayerParams {
  artwork: Artwork[];
}

export default function useArtworkPlayer({
  artwork,
}: UseArtworkPlayerParams): ArtworkPlayer {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentArtworkIndex, setCurrentArtworkIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isAudioRefLoaded, setIsAudioRefLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  let currentArtwork = artwork[currentArtworkIndex];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = "/artwork/0/0.wav";
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

  useEffect(() => {
    if (isAudioRefLoaded) {
      audioRef.current!.pause();
      audioRef.current!.src = `/artwork/${currentArtworkIndex}/${currentArtworkIndex}.wav`;
      audioRef.current!.play().catch((error) => console.log(error));
      setIsPlaying(true);
    }
  }, [currentArtworkIndex]);

  function togglePlayPause() {
    if (!isPlaying) {
      setIsPlaying(true);
      return;
    }
    setIsPlaying(false);
  }

  function selectPreviousArtwork() {
    if (currentArtworkIndex > 0) {
      setCurrentArtworkIndex(currentArtworkIndex - 1);
    }
  }

  function selectNextArtwork() {
    if (currentArtworkIndex < artwork.length - 1) {
      setCurrentArtworkIndex(currentArtworkIndex + 1);
    }
  }

  function handleSliderChange(e: ChangeEvent<HTMLInputElement>) {
    if (isAudioRefLoaded) {
      audioRef.current!.currentTime = e.target.valueAsNumber;
      setCurrentTime(e.target.valueAsNumber);
    }
  }

  return {
    currentArtwork,
    isPlaying,
    togglePlayPause,
    selectPreviousArtwork,
    selectNextArtwork,
    audioRef,
    currentTime,
    duration,
    handleSliderChange,
  };
}
