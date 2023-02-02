import AsciiCanvas from "@/components/AsciiCanvas";
import ArtworkData from "@/components/ArtworkData";
// @ts-ignore
import { Pause, Play } from "feather-icons-react";
import { Artwork as IArtwork } from "@/types";
import ArtworkPlayer from "@/components/ArtworkPlayer";

interface ArtworkProps extends IArtwork {}

export default function Artwork(props: ArtworkProps) {
  const { id, audioSrc, imageSrc, date, musicalKey, bpm, href } = props;

  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-8">
        <ArtworkData
          id={id}
          date={date}
          musicalKey={musicalKey}
          bpm={bpm}
          href={href}
        />
        <AsciiCanvas imageSrc={imageSrc} size="md" />
      </div>
      <ArtworkPlayer audioSrc={audioSrc} />
    </div>
  );
}
