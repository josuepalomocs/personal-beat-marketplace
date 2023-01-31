import { useEffect, useRef, useState } from "react";
import { Track } from "@/types";

export default function useTrackPlayer(tracks: Track[]) {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const [selectedTrackIndex, setSelectedTrackIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setSelectedTrack(tracks[selectedTrackIndex]);
  }, [selectedTrackIndex]);

  useEffect(() => {
    if (selectedTrack && audioRef.current) {
      audioRef.current.src = `/tracks/audio/${selectedTrack?.id || "0"}.wav`;
      playTrack();
    }
  }, [selectedTrack]);

  function selectTrackById(selectedTrackId: number) {
    tracks.forEach(({ id }, index) => {
      if (selectedTrackId === id) {
        setSelectedTrackIndex(index);
      }
    });
  }

  function selectPreviousTrack() {
    if (selectedTrackIndex > 0) {
      setSelectedTrackIndex(selectedTrackIndex - 1);
    }
  }
  function selectNextTrack() {
    if (selectedTrack && selectedTrackIndex < tracks.length - 1) {
      setSelectedTrackIndex(selectedTrackIndex + 1);
    }
  }

  function playTrack() {
    audioRef.current
      ?.play()
      .then(() => setIsPlaying(true))
      .catch((error) => console.log(error));
  }

  function pauseTrack() {
    audioRef.current?.pause();
    setIsPlaying(false);
  }

  function resetCurrentTimeToStart() {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  }

  return {
    tracks,
    selectedTrack,
    selectedTrackIndex,
    selectTrackById,
    selectPreviousTrack,
    selectNextTrack,
    isPlaying,
    playTrack,
    pauseTrack,
    resetCurrentTimeToStart,
    currentTime,
    setCurrentTime,
    audioRef,
  };
}
