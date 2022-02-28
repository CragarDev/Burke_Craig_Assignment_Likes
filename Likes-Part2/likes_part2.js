console.log();

const likesInnerText = document.querySelectorAll(".like-text");
const informationText = document.querySelector(".info");
let counter1 = 9;
let counter2 = 12;
let counter3 = 9;

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

function addLike1(element) {
  counter1++;
  element.innerText = `${counter1} like(s)`;
}

function addLike2(element) {
  "counter2: ", counter2++;
  element.innerText = `${("counter2: ", counter2)} like(s)`;
}

function addLike3(element) {
  "counter3: ", counter3++;
  element.innerText = `${("counter3: ", counter3)} like(s)`;
}
console.log();
