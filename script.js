const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "С", "D", "E", "F"];

const divs = document.querySelectorAll(".color1");

const changeButton = document.querySelectorAll(".change");
const generateButton = document.querySelector(".generate");
function getRandomColor() {
  let newColor = "#";
  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * colors.length);
    let randomNumber = colors[randomIndex];
    newColor += randomNumber + "";
  }
  return newColor;
}

function handleClick() {
  divs.forEach(function (el) {
    const texts = el.querySelector(".text");
    const randomColor = getRandomColor();
    el.style.backgroundColor = randomColor;
    texts.textContent = randomColor;
  });
  console.log("click");
}

changeButton.forEach(function (el) {
  el.addEventListener("click", handleClick);
});

generateButton.addEventListener("click", handle);

function handle() {
  handleClick();
}
texts.onclick = function () {
  texts.select();
  document.execCommand("copy");
};
