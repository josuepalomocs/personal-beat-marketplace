import { createContext, ReactNode } from "react";
import { Artwork, ArtworkPlayer } from "@/types";
import useArtworkPlayer from "@/hooks/useArtworkPlayer";

interface ArtworkPlayerProviderProps {
  children: ReactNode;
}

export const ArtworkPlayerContext = createContext<ArtworkPlayer | undefined>(
  undefined
);

export default function ArtworkPlayerProvider({
  children,
}: ArtworkPlayerProviderProps) {
  const artwork: Artwork[] = [
    {
      id: 0,
      imageSrc: "/",
      date: new Date(),
      musicalKey: "c#",
      bpm: 155,
    },
    {
      id: 1,
      imageSrc: "/",
      date: new Date(),
      musicalKey: "c#",
      bpm: 155,
    },
    {
      id: 2,
      imageSrc: "/",
      date: new Date(),
      musicalKey: "c#",
      bpm: 155,
    },
  ];
  const artworkPlayer = useArtworkPlayer({ artwork });

  return (
    <ArtworkPlayerContext.Provider value={artworkPlayer}>
      {children}
    </ArtworkPlayerContext.Provider>
  );
}
