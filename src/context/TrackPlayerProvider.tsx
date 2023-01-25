import { createContext, ReactNode } from "react";
import useTrackPlayer from "@/hooks/useTrackPlayer";
import { TrackPlayer } from "@/types";

interface TrackPlayerProviderProps {
  children: ReactNode;
}

export const TrackPlayerContext = createContext<TrackPlayer | undefined>(
  undefined
);

export function TrackPlayerProvider({ children }: TrackPlayerProviderProps) {
  const trackPlayer = useTrackPlayer([
    {
      title: "Stop Breathing",
      audioSrc: "/0.wav",
      imageSrc: "/",
      datePosted: new Date(),
      audioLength: 224,
      shareHyperlink: "/",
      downloadHyperLink: "/",
    },
    {
      title: "Stop Breathing",
      audioSrc: "/0.wav",
      imageSrc: "/",
      datePosted: new Date(),
      audioLength: 224,
      shareHyperlink: "/",
      downloadHyperLink: "/",
    },
    {
      title: "Stop Breathing",
      audioSrc: "/0.wav",
      imageSrc: "/",
      datePosted: new Date(),
      audioLength: 224,
      shareHyperlink: "/",
      downloadHyperLink: "/",
    },
  ]);

  return (
    <TrackPlayerContext.Provider value={trackPlayer}>
      {children}
    </TrackPlayerContext.Provider>
  );
}
