import "./styles.css";

(function () {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(50, 50);
  ctx.lineTo(65, 45);
  ctx.lineTo(65, 55);
  ctx.fill();
})();
