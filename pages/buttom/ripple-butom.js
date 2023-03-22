function rippleCLick() {
  let buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.onclick = function (e) {
      let x = e.pageX - e.target.offsetLeft;
      let y = e.pageY - e.target.offsetTop;

      let ripples = document.createElement("span");
      ripples.style.left = x + "px";
      ripples.style.top = y + "px";
      this.appendChild(ripples);
      setTimeout(() => {
        ripples.remove();
      }, 2000);
    };
  });
}

rippleCLick();
