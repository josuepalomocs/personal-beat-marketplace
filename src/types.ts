import {
  ChangeEvent,
  Dispatch,
  RefObject,
  SetStateAction,
  SyntheticEvent,
} from "react";

export interface Artwork {
  id: number;
  imageSrc: string;
  date: Date;
  musicalKey: string;
  bpm: number;
}

export interface ArtworkPlayer {
  currentArtwork: Artwork;
  isPlaying: boolean;
  togglePlayPause: () => void;
  selectPreviousArtwork: () => void;
  selectNextArtwork: () => void;
  audioRef: RefObject<HTMLAudioElement>;
  currentTime: number;
  duration: number;
  handleSliderChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
