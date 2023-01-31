import { Dispatch, RefObject, SetStateAction } from "react";

export interface Track {
  id: number;
  title: string;
  audioSrc: string;
  imageSrc: string;
  datePosted: Date;
  audioLength: number;
  shareHyperlink: string;
  downloadHyperLink: string;
}

export interface TrackPlayer {
  tracks: Track[];
  selectedTrack: Track;
  selectTrackById: (index: number) => void;
  selectPreviousTrack: () => void;
  selectNextTrack: () => void;
  isPlaying: boolean;
  togglePlayAudio: () => void;
  stopAudio: () => void;
  isLooping: boolean;
  toggleLoopAudio: () => void;
  isMuted: boolean;
  toggleMuteAudio: () => void;
  volume: number;
  setVolume: Dispatch<SetStateAction<number>>;
  audioRef: RefObject<HTMLAudioElement>;
}
