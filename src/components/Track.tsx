import { Track as TrackType } from "@/types";
import { formatDate } from "@/utility/dayjs";
import { formatAudioLength } from "@/utility/time";

interface TrackProps extends TrackType {}

export default function Track(props: TrackProps) {
  const {
    title,
    audioSrc,
    imageSrc,
    datePosted,
    audioLength,
    shareHyperlink,
    downloadHyperLink,
  } = props;

  console.log(audioLength / 60);

  return (
    <div className="flex justify-between w-96 text-sm">
      <audio src={audioSrc} controls />
      <p>{title}</p>
      <p>{imageSrc}</p>
      <p>{formatDate(datePosted, "MMM DD | YYYY")}</p>
      <p>{formatAudioLength(audioLength)}</p>
      <p>{shareHyperlink}</p>
      <p>{downloadHyperLink}</p>
    </div>
  );
}
