import "./styles.css";

function point(ctx: CanvasRenderingContext2D, rads: number): void {
  ctx.translate(15, 10);
  ctx.rotate(rads);
  ctx.translate(-15, -10);
}

interface Boid {
  xPos: number;
  yPos: number;
  heading: number;
  speed: number;
}

function drawBoid(boid: Boid): Path2D {
  // TODO: Create a function that translates a boid's "position" to a path value
  // and also convert it's heading to the appropriate rotation
  return new Path2D("M0 10 L30 0 L25 10 L30 20Z");
}

// TODO: Create a function for incrimenting a boid's position based on it's velocity

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
// Translate in the direction the boid is pointing
point(ctx, (Math.PI * 3) / 2);
drawBoid();

ctx.fill(p);
