import AsciiCanvas from "@/components/AsciiCanvas";
import ArtworkData from "@/components/ArtworkData";

interface ArtworkProps {}

export default function Artwork({}: ArtworkProps) {
  return (
    <div className="flex items-center">
      <ArtworkData
        id={24}
        date={new Date()}
        musicalKey="c#"
        bpm={154}
        href="#"
      />
      <AsciiCanvas imageSrc="prox.jpeg" size="md" />
    </div>
  );
}
