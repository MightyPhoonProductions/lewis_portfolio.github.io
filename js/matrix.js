const matrixCanvas = document.createElement("canvas");
matrixCanvas.id = "matrix-canvas";
document.body.appendChild(matrixCanvas);
const mCtx = matrixCanvas.getContext("2d");
matrixCanvas.width = window.innerWidth;
matrixCanvas.height = window.innerHeight;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()*&^%";
const fontSize = 16;
const columns = matrixCanvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix(){
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
  requestAnimationFrame(drawMatrix);
}
drawMatrix();

window.addEventListener("resize", () => {
  matrixCanvas.width = window.innerWidth;
  matrixCanvas.height = window.innerHeight;
});
