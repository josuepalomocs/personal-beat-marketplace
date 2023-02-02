import AsciiCanvas from "@/components/AsciiCanvas";
import ArtworkData from "@/components/ArtworkData";
// @ts-ignore
import { Pause, Play } from "feather-icons-react";

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
      {/*<div className="flex items-center space-x-4">*/}
      {/*  <button className="relative top-[0px] text-neutral-300">*/}
      {/*    /!*<Pause className="text-neutral-300 fill-neutral-300" size={16} />*!/*/}
      {/*    <Play className="text-neutral-300 fill-neutral-300" size={16} />*/}
      {/*  </button>*/}
      {/*  <input className="w-full h-[2px] accent-emerald-600" type="range" />*/}
      {/*</div>*/}
    </div>
  );
}
