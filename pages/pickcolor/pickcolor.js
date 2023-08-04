function expandColors(e) {
  const component = document.getElementById("component");
  if (component.classList.contains("hide-colors")) {
    component.classList.remove("hide-colors");
  } else {
    component.classList.add("hide-colors");
  }
  console.log(component);
}

function selectColor(e) {
  const selectedColor = document.getElementById("color");
  selectedColor.style.background = e.target.value;
  selectedColor.classList.remove("empty");
  selectedColor.classList.add("selected");

  const inputColor = document.createElement("input");
  inputColor.setAttribute("type", "color");
  inputColor.setAttribute("value", e.target.value);

  const newColor = document.createElement("label");
  newColor.classList.add("card-color", "color-switch");

  newColor.appendChild(inputColor);

  const colorContainer = document.getElementById("color-container");
  colorContainer.insertBefore(newColor, colorContainer.childNodes[2]);
  //colorContainer.appendChild(newColor);
}
