import MainActions from "@/components/TrackControl/MainActions";
import Slider from "@/components/TrackControl/Slider";
import { useEffect, useState } from "react";

interface TrackControlProps {}

export default function TrackControl() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setSeconds(seconds + 1);
    }, 1000);
  });

  return (
    <div className="fixed bottom-0 flex flex-col justify-center items-center space-y-3 w-screen h-36">
      <MainActions />
      <Slider audioLength={140} timeElapsed={seconds} />
    </div>
  );
}
