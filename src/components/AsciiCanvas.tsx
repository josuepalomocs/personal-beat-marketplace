import useAsciiCanvas from "@/hooks/useAsciiCanvas";

interface AsciiCanvasProps {
  imageSrc: string;
  size: "sm" | "md" | "lg";
}

export default function AsciiCanvas({ imageSrc, size }: AsciiCanvasProps) {
  const { canvasRef } = useAsciiCanvas({ imageSrc, size });

  return <canvas className="w-[200px] sm:w-[400px]" ref={canvasRef} />;
}
