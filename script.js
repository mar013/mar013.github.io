let box = document.querySelector(".color");
let input = document.querySelector(".colorInput");
let bg = document.querySelector("body");
let clearSolBut = document.querySelector(".btn");
let divheight = document.querySelector(".background");

window.onload = function() {
    document.getElementById('gradientcol').style.display = 'none';
  };

function showSolid() {
    document.getElementById('gradientcol').style.display = 'none';
    document.getElementById('solidcol').style.display = 'block';
    divheight.style.height = "";
}

function showGrad() {
    document.getElementById('gradientcol').style.display = 'block';
    document.getElementById('solidcol').style.display = 'none';
    divheight.style.height = "400px";
}

input.addEventListener("input", () => {
    box.style.borderRadius = input.value;
    box.style.background = input.value;
    bg.style.background = input.value;
})

clearSolBut.addEventListener("click", () => {
    input.value = "";
    box.style.borderRadius = "";
    box.style.background = "";
    bg.style.background = "";
})

let gradInput1 = document.querySelector(".gradInput1");
let gradInput2 = document.querySelector(".gradInput2");
let gradbox = document.querySelector(".gradbox");
let clearGradBut = document.querySelector(".Gradbtn");

gradInput1.addEventListener("input", () => {
    gradbox.style.background = 'linear-gradient(' + gradInput1.value + ',' + gradInput2.value + ')';
    bg.style.background = 'linear-gradient(' + gradInput1.value + ',' + gradInput2.value + ')';
})

gradInput2.addEventListener("input", () => {
    gradbox.style.background = 'linear-gradient(' + gradInput1.value + ',' + gradInput2.value + ')';
    bg.style.background = 'linear-gradient(' + gradInput1.value + ',' + gradInput2.value + ')';
})

clearGradBut.addEventListener("click", () => {
    gradInput1.value = "";
    gradInput2.value = "";
    gradbox.style.background = "";
    bg.style.background = "";
})
  