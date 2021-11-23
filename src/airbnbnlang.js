import "./styles.css";

const button = document.getElementById("btn_changeText");
const textarea_input = document.getElementById("textarea_input");
const textarea_output = document.getElementById("textarea_output");

button.addEventListener("click", buttonHandler);

function buttonHandler(e) {
  let a = textarea_input.value.toString().trim().split("");
  console.log(a[0].charCodeAt(0));
  console.log(a[0]);
}
