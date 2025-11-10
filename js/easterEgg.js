// Secret terminal popup (Konami code)
let keys = [], konami = "38,38,40,40,37,39,37,39,66,65";
window.addEventListener("keydown", e => {
  keys.push(e.keyCode);
  if(keys.toString().includes(konami)){
    alert("🚀 Secret Terminal Activated!\nWelcome to the hidden retro console!");
    keys = [];
  }
});
