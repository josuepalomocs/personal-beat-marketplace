import { Track as ITrack } from "../types";
import Link from "next/link";
import { convertIdToFormattedBitString } from "@/utility/bitstring";

interface TrackGridProps {
  trackList: Omit<
    ITrack,
    "audioSrc" | "imageSrc" | "imageSrc" | "date" | "musicalKey" | "bpm"
  >[];
}

export default function TrackGrid({ trackList }: TrackGridProps) {
  function renderTrackListItems() {
    return trackList.map(({ id, href }) => {
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
      {renderTrackListItems()}
    </ul>
  );
}
