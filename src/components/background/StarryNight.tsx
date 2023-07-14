import dynamic from "next/dynamic";
import { useState } from "react";

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});
export default function StarryNight() {
  const [x, setX] = useState(50);

  const setup = (p5:any, canvasParentRef:any) => {
    const width = typeof window !== "undefined" ? window.innerWidth : 0;
    const height = typeof window !== "undefined" ? window.innerHeight : 0;
    p5.createCanvas(width, height).parent(canvasParentRef);
  };
  // p5.js draw 함수
  const draw = (p5: {
    background: (arg0: number) => void;
    ellipse: (arg0: number, arg1: number, arg2: number) => void;
    width: number;
  }) => {
    p5.background(220);
    p5.ellipse(x, 250, 50);
    setX(x > p5.width ? 0 : x + 1);
  };

  return <Sketch setup={setup} draw={draw} />;
}
