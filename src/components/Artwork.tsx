import AsciiCanvas from "@/components/AsciiCanvas";
import ArtworkData from "@/components/ArtworkData";
import { PlayIcon } from "@heroicons/react/20/solid";

interface ArtworkProps {}

export default function Artwork({}: ArtworkProps) {
  return (
    <div className="">
      <div className="flex items-center mb-8">
        <ArtworkData
          id={24}
          date={new Date()}
          musicalKey="c#"
          bpm={154}
          href="#"
        />
        <AsciiCanvas imageSrc="/prox.jpeg" size="md" />
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative top-[0px] text-neutral-300">⏸︎</button>
        <input className="w-full h-[2px] accent-emerald-600" type="range" />
      </div>
    </div>
  );
}
