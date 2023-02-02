import { createContext, ReactNode } from "react";
import useTrackPlayer from "@/hooks/useTrackPlayer";

interface TrackPlayerProviderProps {
  children: ReactNode;
}

// TODO: FIX ANY TYPE HERE
export const TrackPlayerContext = createContext<any | undefined>(undefined);

export function TrackPlayerProvider({ children }: TrackPlayerProviderProps) {
  const trackPlayer = useTrackPlayer([
    {
      id: 0,
      title: "0",
      audioSrc: "/artwork/audio/0.wav",
      imageSrc: "/",
      datePosted: new Date(),
      audioLength: 224,
      shareHyperlink: "/",
      downloadHyperLink: "/",
    },
    {
      id: 1,
      title: "1",
      audioSrc: "/artwork/audio/0.wav",
      imageSrc: "/",
      datePosted: new Date(),
      audioLength: 224,
      shareHyperlink: "/",
      downloadHyperLink: "/",
    },
    {
      id: 2,
      title: "01",
      audioSrc: "/artwork/audio/0.wav",
      imageSrc: "/",
      datePosted: new Date(),
      audioLength: 224,
      shareHyperlink: "/",
      downloadHyperLink: "/",
    },
    {
      id: 3,
      title: "11",
      audioSrc: "/artwork/audio/0.wav",
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
