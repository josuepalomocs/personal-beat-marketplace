import { useEffect, useRef, useState } from "react";
import { Track, TrackPlayer } from "@/types";

export default function useTrackPlayer(tracks: Track[]): TrackPlayer {
  const [selectedTrackIndex, setSelectedTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);

  const selectedTrack = tracks[selectedTrackIndex];
  let audioRef = useRef<HTMLAudioElement>(null);

  function selectTrack(index: number) {
    setSelectedTrackIndex(index);
    togglePlayAudio();
  }

  function selectPreviousTrack() {
    if (selectedTrackIndex > 0) {
      setSelectedTrackIndex(selectedTrackIndex - 1);
    }
  }

  function selectNextTrack() {
    if (selectedTrackIndex < tracks.length - 1) {
      setSelectedTrackIndex(selectedTrackIndex + 1);
    }
  }

  function togglePlayAudio() {
    if (audioRef.current) {
      if (!isPlaying) {
        return audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((error) => console.log(error));
      }
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }

  function toggleLoopAudio() {
    if (audioRef.current) {
      audioRef.current.loop = !isLooping;
      setIsLooping(!isLooping);
    }
  }

  function toggleMuteAudio() {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  }

  return {
    tracks,
    selectedTrack,
    selectedTrackIndex,
    setSelectedTrackIndex,
    selectTrack,
    selectPreviousTrack,
    selectNextTrack,
    isPlaying,
    togglePlayAudio,
    isLooping,
    toggleLoopAudio,
    isMuted,
    toggleMuteAudio,
    volume,
    setVolume,
    audioRef,
  };
}
