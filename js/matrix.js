const matrixCanvas = document.getElementById("matrix-canvas") || (() => {
  const c = document.createElement("canvas");
  c.id="matrix-canvas";
  document.body.appendChild(c);
  return c;
})();
const mCtx = matrixCanvas.getContext("2d");

function resizeMatrixCanvas() {
  matrixCanvas.width = window.innerWidth;
  matrixCanvas.height = window.innerHeight;
}
resizeMatrixCanvas();

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()*&^%";
let fontSize = window.innerWidth < 480 ? 12 : 16;
let columns = matrixCanvas.width / fontSize;
let drops = Array(Math.floor(columns)).fill(1);

function drawMatrix(){
  if(window.innerWidth >= 480){ // hide on small screens
    mCtx.fillStyle = "rgba(0,0,0,0.05)";
    mCtx.fillRect(0,0,matrixCanvas.width,matrixCanvas.height);

    mCtx.fillStyle = "#0F0";
    mCtx.font = fontSize + "px monospace";

    for(let i=0;i<drops.length;i++){
      const text = letters.charAt(Math.floor(Math.random()*letters.length));
      mCtx.fillText(text,i*fontSize,drops[i]*fontSize);
      drops[i]++;
      if(drops[i]*fontSize > matrixCanvas.height && Math.random() > 0.975) drops[i]=0;
    }
  }
  requestAnimationFrame(drawMatrix);
}
drawMatrix();

window.addEventListener("resize", () => {
  resizeMatrixCanvas();
  fontSize = window.innerWidth < 480 ? 12 : 16;
  columns = matrixCanvas.width / fontSize;
  drops = Array(Math.floor(columns)).fill(1);
});
