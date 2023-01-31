import TrackList from "@/components/TrackList";
import { useContext, useEffect } from "react";
import { TrackPlayerContext } from "@/context/TrackPlayerProvider";

interface TrackSectionProps {}

export default function TrackSection() {
  const { tracks } = useContext(TrackPlayerContext) || {};

  return <TrackList tracks={tracks ? tracks : []} />;
}
