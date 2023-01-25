import TrackList from "@/components/TrackList";
import { useContext, useEffect } from "react";
import { TrackPlayerContext } from "@/context/TrackPlayerProvider";

interface TrackSectionProps {}

export default function TrackSection({}: TrackSectionProps) {
  const { tracks } = useContext(TrackPlayerContext) || {};

  // TODO: fetch tracks from server
  useEffect(() => {});

  return <TrackList tracks={tracks ? tracks : []} />;
}
