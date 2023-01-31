import { Dispatch, RefObject, SetStateAction } from "react";

export interface Artwork {
  id: number;
  imageSrc: string;
  date: Date;
  musicalKey: string;
  bpm: number;
}

// export interface TrackPlayer {
//   tracks: Artwork[];
//   selectedTrack: Artwork;
//   selectTrackById: (index: number) => void;
//   selectPreviousTrack: () => void;
//   selectNextTrack: () => void;
//   isPlaying: boolean;
//   togglePlayAudio: () => void;
//   stopAudio: () => void;
//   isLooping: boolean;
//   toggleLoopAudio: () => void;
//   isMuted: boolean;
//   toggleMuteAudio: () => void;
//   volume: number;
//   setVolume: Dispatch<SetStateAction<number>>;
//   audioRef: RefObject<HTMLAudioElement>;
// }
