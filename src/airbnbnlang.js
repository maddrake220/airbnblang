import "./styles.css";
import { F, S, T } from "./arrays";
import getConstantVowel from "./getConstantVowel";
import { getNewF, getNewS, getNewT } from "./getNewKoreanChar";

const button = document.getElementById("btn_changeText");
const textarea_input = document.getElementById("textarea_input");
const textarea_output = document.getElementById("textarea_output");

button.addEventListener("click", buttonHandler);
function buttonHandler(e) {
  const entireSentence = textarea_input.value.toString().trim().split("");
  const answer = "";
  for (let i in entireSentence) {
    if (entireSentence[i] === " ") {
      answer += " ";
    } else if (entireSentence[i].charCodeAt(0) < 44032) {
      answer += entireSentence[i];
    } else {
      const str = getConstantVowel(entireSentence[i]);
      let top, middle, bottom;
      const random = Math.floor(Math.random() * 2);
      if (random === 0) {
        top = getNewF(str.f);
        middle = getNewS(str.s);
        bottom = T.indexOf(str.t);
      } else if (random === 1) {
        top = getNewF(str.f);
        middle = S.indexOf(str.s);
        bottom = getNewT(str.t);
      } else {
        top = F.indexOf(str.f);
        middle = getNewS(str.s);
        bottom = getNewT(str.t);
      }
      answer += String.fromCharCode(44032 + top * 588 + middle * 28 + bottom);
    }
  }

  textarea_output.innerText = answer;
}
