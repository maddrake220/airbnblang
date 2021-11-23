import "./styles.css";
const F = [
  "ㄱ",
  "ㄲ",
  "ㄴ",
  "ㄷ",
  "ㄸ",
  "ㄹ",
  "ㅁ",
  "ㅂ",
  "ㅃ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅉ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
];
const S = [
  "ㅏ",
  "ㅐ",
  "ㅑ",
  "ㅒ",
  "ㅓ",
  "ㅔ",
  "ㅕ",
  "ㅖ",
  "ㅗ",
  "ㅘ",
  "ㅙ",
  "ㅚ",
  "ㅛ",
  "ㅜ",
  "ㅝ",
  "ㅞ",
  "ㅟ",
  "ㅠ",
  "ㅡ",
  "ㅢ",
  "ㅣ",
];
const T = [
  "",
  "ㄱ",
  "ㄲ",
  "ㄳ",
  "ㄴ",
  "ㄵ",
  "ㄶ",
  "ㄷ",
  "ㄹ",
  "ㄺ",
  "ㄻ",
  "ㄼ",
  "ㄽ",
  "ㄾ",
  "ㄿ",
  "ㅀ",
  "ㅁ",
  "ㅂ",
  "ㅄ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
];
const button = document.getElementById("btn_changeText");
const textarea_input = document.getElementById("textarea_input");
const textarea_output = document.getElementById("textarea_output");
function getConstantVowel(kor) {
  const ga = 44032;
  let uni = kor.charCodeAt(0);

  uni = uni - ga;

  let fn = parseInt(uni / 588);
  let sn = parseInt((uni - fn * 588) / 28);
  let tn = parseInt(uni % 28);

  return {
    f: F[fn],
    s: S[sn],
    t: T[tn],
  };
}
button.addEventListener("click", buttonHandler);
const testF = (el) => {
  let r = Math.floor(Math.random() * 3);
  if (el === "ㄱ" || el === "ㄲ" || el === "ㅋ") {
    return r === 0 ? 0 : r === 1 ? 1 : 15;
  } else if (el === "ㄷ" || el === "ㅌ" || el === "ㄸ") {
    return r === 0 ? 3 : r === 1 ? 4 : 16;
  } else if (el === "ㅂ" || el === "ㅃ" || el === "ㅍ") {
    return r === 0 ? 7 : r === 1 ? 8 : 17;
  } else if (el === "ㅈ" || el === "ㅉ" || el === "ㅊ") {
    return r === 0 ? 12 : r === 1 ? 13 : 14;
  } else if (el === "ㅅ" || el === "ㅆ") {
    return r === 0 ? 9 : r === 1 ? 10 : 9;
  } else {
    return F.indexOf(el);
  }
};

function buttonHandler(e) {
  let entireSentence = textarea_input.value.toString().trim().split("");
  let str = getConstantVowel(entireSentence[0]);

  if (str.t !== "") {
    let random1 = Math.floor(Math.random() * 2);
    let top = testF(str.f);
    let middle = S.indexOf(str.s);
    let bottom = T.indexOf(str.t);

    console.log(String.fromCharCode(44032 + top * 588 + middle * 28 + bottom));
  }
}
