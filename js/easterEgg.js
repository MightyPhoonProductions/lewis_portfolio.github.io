// Konami code sequence
let keys = [], konami = "38,38,40,40,37,39,37,39,66,65";

const terminal = document.getElementById("retro-terminal");
const terminalText = document.getElementById("terminal-text");
const cursor = document.getElementById("cursor");

window.addEventListener("keydown", e => {
  keys.push(e.keyCode);
  if(keys.toString().includes(konami)){
    activateTerminal();
    keys = [];
  }
});

function activateTerminal() {
  terminal.classList.remove("hidden");
  terminalText.innerHTML = ""; // clear previous text
  cursor.style.display = "inline-block";

  const messages = [
    "Welcome to the Retro Terminal!",
    "Initializing system...",
    "Loading shaders... ████░░░░░░",
    "Compiling effects... ██████░░░",
    "Pipeline ready.",
    "Enjoy the hidden retro console! 🚀"
  ];

  let i = 0;
  function typeLine() {
    if(i < messages.length){
      let line = messages[i];
      let j = 0;
      function typeChar(){
        if(j < line.length){
          terminalText.innerHTML += line[j];
          j++;
          setTimeout(typeChar, 50);
          terminal.scrollTop = terminal.scrollHeight;
        } else {
          terminalText.innerHTML += "\n";
          i++;
          setTimeout(typeLine, 200);
        }
      }
      typeChar();
    }
  }
  typeLine();
}

function closeTerminal() {
  terminal.classList.add("hidden");
  cursor.style.display = "none";
}
