import { Track as TrackType } from "@/types";
import Track from "@/components/Track";
import { formatAudioTimestamp } from "@/utility/time";

interface TrackListProps {
  tracks: TrackType[];
}

export default function TrackList({ tracks }: TrackListProps) {
  function renderTracks() {
    return tracks.map((track) => {
      const {
        id,
        title,
        audioSrc,
        imageSrc,
        datePosted,
        audioLength,
        shareHyperlink,
        downloadHyperLink,
      } = track;

      return (
        <li key={id} className="text-neutral-400">
          <Track
            id={id}
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

  return <ul className="flex flex-col space-y-3">{renderTracks()}</ul>;
}
