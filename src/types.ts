import {
  ChangeEvent,
  Dispatch,
  RefObject,
  SetStateAction,
  SyntheticEvent,
} from "react";

export interface Artwork {
  id: number;
  audioSrc: string;
  imageSrc: string;
  date: Date;
  musicalKey: string;
  bpm: number;
  href: string;
}

export interface ArtworkPlayer {
  isPlaying: boolean;
  togglePlayPause: () => void;
  audioRef: RefObject<HTMLAudioElement>;
  currentTime: number;
  duration: number;
  handleSliderChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
