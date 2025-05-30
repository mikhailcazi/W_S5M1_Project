function tttScript() {
  const footer = document.querySelector("footer");
  const currentYear = new Date().getFullYear();
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`;

  const boardSize = 9;

  let currentIndex = 4;
  const startSquare = document.getElementById(currentIndex);
  startSquare.classList.add("highlight");

  document.addEventListener("keydown", (event) => {
    let currentSquare = document.getElementById(currentIndex);

    switch (event.code) {
      case "ArrowUp":
        if (currentIndex > 2) {
          currentSquare.classList.remove("highlight");
          currentIndex -= 3;
          currentSquare = document.getElementById(currentIndex);
          currentSquare.classList.add("highlight");
        }
        break;
      case "ArrowDown":
        if (currentIndex < 6) {
          currentSquare.classList.remove("highlight");
          currentIndex += 3;
          currentSquare = document.getElementById(currentIndex);
          currentSquare.classList.add("highlight");
        }
        break;
      case "ArrowLeft":
        if (currentIndex > 0) {
          currentSquare.classList.remove("highlight");
          currentIndex--;
          currentSquare = document.getElementById(currentIndex);
          currentSquare.classList.add("highlight");
        }
        break;
      case "ArrowRight":
        if (currentIndex < 8) {
          currentSquare.classList.remove("highlight");
          currentIndex++;
          currentSquare = document.getElementById(currentIndex);
          currentSquare.classList.add("highlight");
        }
        break;
      case "KeyX":
        currentSquare.innerHTML = "X";
        break;
      case "KeyO":
        currentSquare.innerHTML = "O";
        break;
      default:
    }
  });
}

if (typeof module !== "undefined" && module.exports)
  module.exports = { tttScript };
else tttScript();
