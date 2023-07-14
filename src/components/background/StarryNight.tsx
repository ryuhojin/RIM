import p5 from "p5";
import dynamic from "next/dynamic";

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  loading: () => (
    <div style={{ height: "100vh", width: "100%", background: "black" }}>
      Loading...
    </div>
  ),
  ssr: false,
});

let stars: Star[] = [];

class Star {
  p5: p5;
  x: number;
  y: number;
  size: number;
  t: number;
  color: p5.Color;

  constructor(p5: p5) {
    this.p5 = p5;
    this.x = p5.random(p5.width);
    this.y = p5.random(p5.height);
    this.size = p5.random(0.25, 3);
    this.t = p5.random(p5.TAU);
    this.color = p5.color(255); // default color is white
  }

  display() {
    this.p5.noStroke();
    this.p5.fill(this.color);
    this.drawStar(this.x, this.y, this.size, 5);
  }

  twinkle() {
    this.t += 0.1;
    this.size = this.p5.random(0.5, 3) + this.p5.sin(this.t) * 2;
  }

  drawStar(x: number, y: number, radius1: number, npoints: number) {
    let angle = this.p5.TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    this.p5.beginShape();
    for (let a = 0; a < this.p5.TWO_PI; a += angle) {
      let sx = x + this.p5.cos(a) * radius1;
      let sy = y + this.p5.sin(a) * radius1;
      this.p5.vertex(sx, sy);
      sx = x + this.p5.cos(a + halfAngle) * (radius1 * 0.5);
      sy = y + this.p5.sin(a + halfAngle) * (radius1 * 0.5);
      this.p5.vertex(sx, sy);
    }
    this.p5.endShape(this.p5.CLOSE);
  }

  clicked(px: number, py: number) {
    let d = this.p5.dist(px, py, this.x, this.y);
    if (d < this.size) {
      this.color = this.p5.color(
        this.p5.random(255),
        this.p5.random(255),
        this.p5.random(255)
      ); // change color when clicked
    }
  }
}

const StarryNight = () => {
  const setup = (p5: any, canvasParentRef: any) => {
    p5.createCanvas(
      canvasParentRef.offsetWidth,
      canvasParentRef.offsetHeight
    ).parent(canvasParentRef);

    p5.windowResized = () => {
      p5.resizeCanvas(
        canvasParentRef.offsetWidth,
        canvasParentRef.offsetHeight
      );
    };
    for (let i = 0; i < 100; i++) {
      addStar(p5);
    }
  };

  const draw = (p5: any) => {
    p5.background(0);
    for (let i = 0; i < stars.length; i++) {
      stars[i].display();
      stars[i].twinkle();
    }
  };

  const mousePressed = (p5: any) => {
    for (let i = 0; i < stars.length; i++) {
      stars[i].clicked(p5.mouseX, p5.mouseY);
    }
  };

  const addStar = (p5: p5) => {
    let maxAttempts = 100; // Maximum attempts to find a position
    for (let i = 0; i < maxAttempts; i++) {
      let s = new Star(p5);
      let overlap = stars.some(
        (star) => p5.dist(s.x, s.y, star.x, star.y) < (s.size + star.size) * 2
      );
      if (!overlap) {
        stars.push(s);
        break;
      }
    }
  };

  return (
    <Sketch
      setup={setup}
      draw={draw}
      mousePressed={mousePressed}
      style={{ height: "100vh", width: "100%" }}
    />
  );
};

export default StarryNight;
