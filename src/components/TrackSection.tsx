import ArtworkGrid from "@/components/ArtworkGrid";
import { useContext, useEffect } from "react";
import { TrackPlayerContext } from "@/context/TrackPlayerProvider";

interface TrackSectionProps {}

export default function TrackSection() {
  const { tracks } = useContext(TrackPlayerContext) || {};

  return <ArtworkGrid tracks={tracks ? tracks : []} />;
}
