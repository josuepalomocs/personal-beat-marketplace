import { Track as TrackType } from "@/types";
import Track from "@/components/Track";
import { formatAudioLength } from "@/utility/time";

interface TrackListProps {
  tracks: TrackType[];
}

export default function TrackList({ tracks }: TrackListProps) {
  function renderTracks() {
    return tracks.map((track, index) => {
      const {
        title,
        audioSrc,
        imageSrc,
        datePosted,
        audioLength,
        shareHyperlink,
        downloadHyperLink,
      } = track;

      return (
        <li key={index} className="text-neutral-400">
          <Track
            title={title}
            audioSrc={audioSrc}
            imageSrc={imageSrc}
            datePosted={datePosted}
            audioLength={audioLength}
            shareHyperlink={shareHyperlink}
            downloadHyperLink={downloadHyperLink}
          />
        </li>
      );
    });
  }

  return <ul className="">{renderTracks()}</ul>;
}
