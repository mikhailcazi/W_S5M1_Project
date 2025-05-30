function moduleProject1(blastOff) {
  const footer = document.querySelector("footer");
  const currentYear = new Date().getFullYear();
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`;

  // textContent
  const myQuote = document.querySelector("#my-quote");
  const listOfQuotes = [
    "To be or not to be, that is the question",
    "All the world's a stage, and all the men and women are simply actors",
    "The world is changing",
    "The only easy day was yesterday",
    "Be yourself!",
    "Javascript is cool!",
  ];
  myQuote.textContent = listOfQuotes[Math.floor(Math.random() * 5)];

  // setAttribute
  const myImage = document.getElementById("shoe-image");
  const imgSrcList = [
    "images/Shoe - 1.jpg",
    "images/Shoe - 2.jpg",
    "images/Shoe - 3.jpg",
  ];
  let counter = 0;
  setInterval(() => {
    myImage.setAttribute("src", imgSrcList[counter]);
    counter = (counter + 1) % 3;
  }, 1000);

  // style

  const mySentence = document.getElementById("sentence");
  mySentence.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
  mySentence.style.color = "darkgray";

  // className
  if (blastOff === true) {
    const button = document.querySelector("#launch-button");
    button.className = "green-button";

    setTimeout(() => {
      button.classList.remove("green-button");
      button.classList.add("red-button");
    }, 3000);
  }

  // parentNode children

  const myDiv = document.querySelector(".parent-child");

  myDiv.children[0].style.color = "yellow";
  myDiv.children[1].style.color = "green";
  myDiv.children[2].style.color = "blue";

  myDiv.children[0].parentNode.style;

  // createElement
  const headlines = document.querySelector(".headlines");

  const headline1 = document.createElement("p");
  headline1.textContent = "Tornado has struck!";
  headlines.appendChild(headline1);

  const headline2 = document.createElement("p");
  headline2.textContent = "There's a new Pope!";
  headlines.appendChild(headline2);

  headline1.remove();

  // append prepend insertAdjacent
}

if (typeof module !== "undefined" && module.exports)
  module.exports = { moduleProject1 };
else moduleProject1();
