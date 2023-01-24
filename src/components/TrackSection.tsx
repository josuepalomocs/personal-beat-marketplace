import TrackList from "@/components/TrackList";
import { useEffect, useState } from "react";
import { Track } from "@/types";

interface TrackSection {}

export default function TrackSection() {
  const [tracks, setTracks] = useState<Track[]>([
    {
      title: "Stop Breathing",
      audioSrc: "/0.wav",
      imageSrc: "/",
      datePosted: new Date(),
      audioLength: 224,
      shareHyperlink: "/",
      downloadHyperLink: "/",
    },
  ]);

  // TODO: fetch tracks from server
  useEffect(() => {}, []);

  return <TrackList tracks={tracks} />;
}
