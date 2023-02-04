const ContainerTree = document.getElementById("arvore");
const NatalText = document.querySelectorAll("h1");
let numberSpace = 1;

function AddYellowDiv() {
  let space = "";
  for (let index = 0; index < numberSpace; index++) {
    space += "<p class='arvore-p'>i</p>";
  }
  ContainerTree.innerHTML += `<div class="linha">${space}</div>`;
}

function AddBrownDiv() {
  let space = "";
  for (let index = 0; index < 4; index++) {
    space += "<p class='arvore-tronco'>i</p>";
  }
  ContainerTree.innerHTML += `<div class="linha">${space}</div>`;
}

function TextChange() {
  NatalText.forEach((element) => {
    const t = Math.floor(Math.random() * 2);
    if (element.textContent !== ";") {
      if (t == 0) {
        element.style.color = "red";
      } else {
        element.style.color = "greenyellow";
      }
    }
  });
}

function start() {
  AddYellowDiv();
  for (let index = 0; index < 15; index++) {
    numberSpace += 2;
    AddYellowDiv();
  }
  for (let index = 0; index < 2; index++) {
    AddBrownDiv();
  }
  TextChange();
}

start();
setInterval(() => TextChange(), 900);
