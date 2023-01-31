import useAsciiCanvas from "@/hooks/useAsciiCanvas";

interface AsciiCanvasProps {
  imageSrc: string;
  size: "sm" | "md" | "lg";
}

export default function AsciiCanvas({ imageSrc, size }: AsciiCanvasProps) {
  const { canvasRef } = useAsciiCanvas({ imageSrc, size });

  return <canvas ref={canvasRef} />;
}
