function eventsScript() {
  const footer = document.querySelector("footer");
  const currentYear = new Date().getFullYear();
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`;

  const gryffButton = document.querySelector("#gryff");
  gryffButton.addEventListener("click", () => {
    let points = document.querySelector("#gryff-points");
    points.textContent++;
  });
  //   gryffButton.addEventListener("mouseover", () => {
  //     gryffButton.classList.add("gryff-button-hover");
  //   });
  //   gryffButton.addEventListener("mouseleave", () => {
  //     gryffButton.classList.remove("gryff-button-hover");
  //   });

  const ravenButton = document.querySelector("#raven");
  ravenButton.addEventListener("click", () => {
    let points = document.querySelector("#raven-points");
    points.textContent++;
  });

  const slythButton = document.querySelector("#slyth");
  slythButton.addEventListener(
    "click",
    () => {
      let points = document.querySelector("#slyth-points");
      points.textContent++;
    },
    true
  );

  const huffleButton = document.querySelector("#huffle");
  huffleButton.addEventListener("click", () => {
    let points = document.querySelector("#huffle-points");
    points.textContent++;
  });

  document.addEventListener("keypress", (event) => {
    console.log(event);
    if (
      event.code === "Digit1" ||
      event.code === "Digit2" ||
      event.code === "Digit3" ||
      event.code === "Digit4" ||
      event.code === "Digit5"
    ) {
      event.preventDefault();
    }
  });
}

if (typeof module !== "undefined" && module.exports)
  module.exports = { eventsScript };
else eventsScript();
