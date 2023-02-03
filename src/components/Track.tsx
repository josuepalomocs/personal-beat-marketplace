import AsciiCanvas from "@/components/AsciiCanvas";
import TrackData from "@/components/TrackData";
// @ts-ignore
import { Pause, Play } from "feather-icons-react";
import { Track as ITrack } from "@/types";
import AudioPlayer from "@/components/AudioPlayer";

interface TrackProps extends ITrack {}

export default function Track(props: TrackProps) {
  const { id, audioSrc, imageSrc, date, musicalKey, bpm } = props;

  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-8">
        <TrackData id={id} date={date} musicalKey={musicalKey} bpm={bpm} />
        <AsciiCanvas imageSrc={imageSrc} size="md" />
      </div>
      <AudioPlayer audioSrc={audioSrc} />
    </div>
  );
}
