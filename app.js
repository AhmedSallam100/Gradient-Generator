// Variables

let gradinetBox = document.querySelector(".gradinet-box");
let selectMenu = document.querySelector(".select-box select");
let colorInputs = document.querySelectorAll(".colors input");
let textarea = document.querySelector("textarea");
let refresh = document.querySelector(".refresh");
let copy = document.querySelector(".copy");

let getRandomColor = () => {
  // Generate Random Color
  let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${randomHex}`;
};

let generateGradinet = (isRandom) => {
  if (isRandom) {
    colorInputs[0].value = getRandomColor();
    colorInputs[1].value = getRandomColor();
  }
  let gradinet = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
  gradinetBox.style.background = gradinet;
  // console.log(gradinet)
  textarea.value = `background: ${gradinet}`;
};

let copyCode = () => {
  navigator.clipboard.writeText(textarea.value);
  copy.innerText = "Copied..!";
  setTimeout(() => copy.innerText = "Copy Code", 1600);
};
console.log(textarea)
colorInputs.forEach((input) => {
  input.addEventListener("input", () => generateGradinet(false));
});

selectMenu.addEventListener("change", () => generateGradinet(false));

refresh.addEventListener("click", () => generateGradinet(true));

copy.addEventListener("click", copyCode);
