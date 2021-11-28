import { useCallback, useEffect, useRef } from 'react';

type LinesType = {
  [key: string]: string;
};

type CanvasDrawingProps = {
  imageSrc: string;
  lines: LinesType;
  linesDefault: string[];
};

const CanvasDrawing = ({
  imageSrc,
  lines,
  linesDefault,
}: CanvasDrawingProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const initialize = useCallback(() => {
    const bgImage = new Image();
    bgImage.src = imageSrc;
    bgImage.onload = () => {
      drawCanvas(bgImage);
    };
  }, [imageSrc]);

  const drawCanvas = (bgImage: HTMLImageElement) => {
    if (!canvasRef.current) return;
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.width = bgImage.width;
    canvas.height = bgImage.height;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(bgImage, 0, 0);
  };

  const drawText = (text: string) => {
    if (!canvasRef.current) return;
    const canvas: HTMLCanvasElement = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.font = "20pt 'Dotum'";
    ctx.lineWidth = 2;
    ctx.fillStyle = 'black';
    ctx.fillText(text, 100, 100 + text.length);
  };

  useEffect(() => {
    initialize();

    return () => {};
  }, [initialize]);

  useEffect(() => {
    console.log(lines);
    drawText('text');
  }, [lines, linesDefault]);

  return <canvas ref={canvasRef}></canvas>;
};

export default CanvasDrawing;
