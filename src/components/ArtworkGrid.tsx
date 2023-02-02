import { Artwork as IArtwork } from "../types";
import Link from "next/link";
import { convertIdToFormattedBitString } from "@/utility/bitstring";
import { useContext } from "react";
import { ArtworkPlayerContext } from "@/context/ArtworkPlayerProvider";

interface ArtworkGridProps {
  artworkList: Omit<
    IArtwork,
    "audioSrc" | "imageSrc" | "imageSrc" | "date" | "musicalKey" | "bpm"
  >[];
}

export default function ArtworkGrid({ artworkList }: ArtworkGridProps) {
  function renderArtworkGrid() {
    return artworkList.map(({ id, href }) => {
      return (
        <li className="text-center" key={id}>
          <Link className="hover:text-emerald-400" href={href}>
            <p>{convertIdToFormattedBitString(id)}</p>
            <p>{id}</p>
          </Link>
        </li>
      );
    });
  }

  return (
    <ul className="grid grid-cols-1 gap-16 sm:grid-cols-3 md:grid-cols-4">
      {renderArtworkGrid()}
    </ul>
  );
}
