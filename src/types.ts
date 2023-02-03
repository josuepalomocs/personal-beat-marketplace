import { ChangeEvent, RefObject } from "react";

export interface Track {
  id: number;
  audioSrc: string;
  imageSrc: string;
  date: Date;
  musicalKey: string;
  bpm: number;
}

export interface ArtworkPlayer {
  isPlaying: boolean;
  togglePlayPause: () => void;
  audioRef: RefObject<HTMLAudioElement>;
  currentTime: number;
  duration: number;
  handleSliderChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export type LicenseTypes =
  | "starter"
  | "premium"
  | "trackouts"
  | "unlimited"
  | "exclusive";

export interface License {
  trackId: number;
  type: LicenseTypes;
  price?: number;
}

export interface Cart {
  licenses: License[];
}
