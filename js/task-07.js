const inputControler = document.querySelector("#font-size-control")
const textElement = document.querySelector("#text")

inputControler.addEventListener("input", onChangeInputControler);

onChangeInputControler();

function onChangeInputControler() {
  textElement.style.fontSize = inputControler.value + "px";
};