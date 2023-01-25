import { Dispatch, RefObject, SetStateAction } from "react";

export interface Track {
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
  selectedTrackIndex: number;
  setSelectedTrackIndex: Dispatch<SetStateAction<number>>;
  selectTrack: (index: number) => void;
  selectPreviousTrack: () => void;
  selectNextTrack: () => void;
  isPlaying: boolean;
  togglePlayAudio: () => void;
  isLooping: boolean;
  toggleLoopAudio: () => void;
  isMuted: boolean;
  toggleMuteAudio: () => void;
  volume: number;
  setVolume: Dispatch<SetStateAction<number>>;
  audioRef: RefObject<HTMLAudioElement>;
}
