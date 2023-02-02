import { useEffect, useRef, useState } from "react";

interface UseAsciiCanvasParams {
  imageSrc: string;
  size: "sm" | "md" | "lg";
}

export default function useAsciiCanvas({
  imageSrc,
  size,
}: UseAsciiCanvasParams) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      switch (size) {
        case "sm":
          canvas.width = 200;
          canvas.height = 200;
          break;
        case "md":
          canvas.width = 400;
          canvas.height = 400;
          break;
        case "lg":
          canvas.width = 600;
          canvas.height = 600;
          break;
      }
      const context = canvasRef.current.getContext("2d");
      const image = new Image();
      image.src = imageSrc;
      image.onload = () => {
        const horizontalRatio = canvas.width / image.width;
        const verticalRatio = canvas.height / image.height;
        const ratio = Math.min(horizontalRatio, verticalRatio);
        const centerShiftX = (canvas.width - image.width * ratio) / 2;
        const centerShiftY = (canvas.height - image.height * ratio) / 2;
        if (context) {
          context.drawImage(
            image,
            0,
            0,
            image.width,
            image.height,
            centerShiftX,
            centerShiftY,
            image.width * ratio,
            image.height * ratio
          );
          const imageDataWidth = 2;
          const imageDataHeight = 2;
          const imageDataArray = createImageDataArray(
            canvas,
            context,
            imageDataWidth,
            imageDataHeight
          );
          const averageLumaArray = createAverageLumaArray(imageDataArray);
          context.clearRect(0, 0, canvas.width, canvas.height);

          context.font = "2px sans-serif";
          context.fillStyle = "#ffffff";
          animate(
            canvas,
            context,
            imageDataArray,
            imageDataWidth,
            imageDataHeight,
            averageLumaArray
          );
        }
      };
    }
  }, [canvasRef]);

  function animate(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    imageDataArray: ImageData[],
    imageDataWidth: number,
    imageDataHeight: number,
    averageLumaArray: number[]
  ) {
    convertImageToAscii(
      canvas,
      context,
      imageDataArray,
      imageDataWidth,
      imageDataHeight,
      averageLumaArray,
      0.4 + 0.01 * Math.random()
    );

    // for (let i = 0; i < 1000; i++) {
    //   setTimeout(() => {
    //     clearRandomSections(canvas, context);
    //   }, i * 100);
    // }
  }

  function createImageDataArray(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    imageDataWidth: number,
    imageDataHeight: number
  ): ImageData[] {
    let imageDataArray: ImageData[] = [];

    for (let i = 0; i < canvas.height / imageDataHeight; i++) {
      for (let j = 0; j < canvas.width / imageDataWidth; j++) {
        const imageData = context.getImageData(
          j * imageDataWidth,
          i * imageDataHeight,
          imageDataWidth,
          imageDataHeight
        );

        imageDataArray.push(imageData);
      }
    }
    return imageDataArray;
  }

  function createAverageLumaArray(imageDataArray: ImageData[]) {
    let averageLumaArray: number[] = [];
    for (let i = 0; i < imageDataArray.length; i++) {
      const pixelData = imageDataArray[i].data;
      let averageLuma = 0;
      for (let j = 0; j < pixelData.length; j += 4) {
        const luma =
          0.2126 * pixelData[j] +
          0.7152 * pixelData[j + 1] +
          0.0722 * pixelData[j + 2];
        averageLuma += luma;
        for (let k = 0; k < 3; k++) {
          pixelData[j + k] = luma;
        }
      }
      averageLuma /= pixelData.length;
      averageLumaArray.push(averageLuma);
    }
    return averageLumaArray;
  }

  function convertImageToAscii(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    imageDataArray: ImageData[],
    imageDataWidth: number,
    imageDataHeight: number,
    averageLumaArray: number[],
    lumaFactor: number
  ) {
    const charsByArea =
      " '`.-_\"!,:|+i^TIl=v1r)(~;*zso?><LncY7xu\\tjea/}{Jwmfq2yZF9hdVCpkb][60XP4gO3EUGA8HD5&#K%SNBRQMW@$".split(
        ""
      );

    for (let i = 0; i < imageDataArray.length; i += 1) {
      const averageLuma = averageLumaArray[i] * lumaFactor;
      const characterIndex = Math.floor(averageLuma * lumaFactor);

      const numImageDataColumns = canvas.width / imageDataWidth;
      const currentImageDataRow = Math.floor(i / numImageDataColumns);
      const currentImageDataColumn = Math.floor(i % numImageDataColumns);

      setTimeout(() => {
        context.fillText(
          charsByArea[characterIndex],
          currentImageDataColumn * imageDataWidth,
          currentImageDataRow * imageDataHeight
        );
      }, i * 10 * 0.25 * Math.random());
    }
  }

  function clearRandomSections(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D
  ) {
    const x = Math.floor(Math.random() * canvas.width);
    const y = Math.floor(Math.random() * canvas.height);
    context.clearRect(x, y, 2, 2);
  }

  return { canvasRef };
}
