import { formatDate } from "@/utility/dayjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { convertIdToFormattedBitString } from "@/utility/bitstring";

interface ArtworkDataProps {
  id: number;
  date: Date | string;
  musicalKey: string;
  bpm: number;
  href: string;
}

export default function ArtworkData({
  id,
  date,
  musicalKey,
  bpm,
  href,
}: ArtworkDataProps) {
  return (
    <div className="text-sm text-neutral-300 mr-12">
      <p className="">{convertIdToFormattedBitString(id)}</p>
      <p className="">{formatDate(date, "MMM DD YYYY").toUpperCase()}</p>
      <p className="">KEY: {musicalKey.toUpperCase()}</p>
      <p className="mb-8">BPM: {bpm.toString().toUpperCase()}</p>
      <Link
        href={href}
        className="text-sm text-emerald-400 border outline: p-2 hover:bg-emerald-900"
      >
        ACQUIRE
      </Link>
    </div>
  );
}
