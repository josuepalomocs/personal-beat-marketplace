import {
  createContext,
  Dispatch,
  ReactNode,
  RefObject,
  SetStateAction,
  useState,
} from "react";

interface AudioElementProviderProps {
  children: ReactNode;
}

const AudioElementContext = createContext<
  | {
      audioElement: RefObject<HTMLAudioElement> | null;
      setAudioElement: Dispatch<
        SetStateAction<RefObject<HTMLAudioElement> | null>
      >;
    }
  | undefined
>(undefined);

export default function AudioElementProvider({
  children,
}: AudioElementProviderProps) {
  const [audioElement, setAudioElement] =
    useState<RefObject<HTMLAudioElement> | null>(null);

  return (
    <AudioElementContext.Provider value={{ audioElement, setAudioElement }}>
      {children}
    </AudioElementContext.Provider>
  );
}
