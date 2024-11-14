"use strict";

// ***** кнопка *****
const button = document.querySelector(".button");

function btnMod(element, color, mouse) {
  element.addEventListener(mouse, () => {
    element.style.backgroundColor = color;
  });
}

btnMod(button, "#4d5053", "mouseover");
btnMod(button, "", "mouseout");






