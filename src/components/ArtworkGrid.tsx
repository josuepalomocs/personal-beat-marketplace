import Artwork from "@/components/Artwork";
import { Artwork as IArtwork } from "../types";
import Link from "next/link";
import { convertIdToFormattedBitString } from "@/utility/bitstring";

interface ArtworkGridProps {
  artworkList: IArtwork[];
}

export default function ArtworkGrid({ artworkList }: ArtworkGridProps) {
  function renderArtworkGrid() {
    return artworkList.map(({ id }) => {
      return (
        <li className="text-center" key={id}>
          <Link className="hover:text-emerald-400" href="#">
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
