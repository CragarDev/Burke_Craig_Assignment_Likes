console.log();
const likesInnerText = document.querySelector(".like-text");
const informationText = document.querySelector(".info");
likesInnerText.innerText = "3 like(s)";
let counter = 3;

// console.log(likesInnerText);

function hoverColor(element) {
  element.style.backgroundColor = "#f5cc5c";
  element.style.borderColor = "#000";
  element.style.color = "#000";
  element.classList.add("box-shadow-wide");
  element.innerText = "Like";
}

function defaultColor(element) {
  element.style.backgroundColor = "#e9b320";
  element.style.borderColor = "#000";
  element.style.color = "#000";
  element.classList.remove("box-shadow-wide");
}

function clickColor(element) {
  element.style.backgroundColor = "#977822";
  element.style.borderColor = "#000";
  element.style.color = "white";
  element.innerText = "Thanks!";
}

function addOne() {
  counter++;
  likesInnerText.innerText = `${counter} like(s)`;
  changeText();
}

function changeText() {
  const sayings = [
    "Becomes cryogenically frozen and reawakens in the 30th century.",
    "He is a delivery boy for Planet Express, an intergalactic delivery company.",
    "Professor Hubert J. Farnsworth is his 30th great-grandnephew.",
    "He is the best friend and roommate of Bender, the lovable robot.",
    "The boyfriend and later husband of Turanga Leela.",
    "Fry was born in the 20th century in New York City.",
    "Fry's parents are Yancy Fry, Sr., a strict Republican who believes in conspiracy theories."
  ];
  let randNum = Math.ceil(Math.random() * sayings.length - 1);
  informationText.innerText = sayings[randNum];
}
