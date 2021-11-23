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

const testS = (el) => {
  let r = Math.floor(Math.random() * 2);
  if (el === "ㅏ" || el === "ㅑ") {
    return r === 0 ? 0 : 2;
  } else if (el === "ㅐ" || el === "ㅒ") {
    return r === 0 ? 1 : 3;
  } else if (el === "ㅓ" || el === "ㅕ") {
    return r === 0 ? 4 : 6;
  } else if (el === "ㅔ" || el === "ㅖ") {
    return r === 0 ? 5 : 7;
  } else if (el === "ㅗ" || el === "ㅛ") {
    return r === 0 ? 8 : 12;
  } else if (el === "ㅙ" || el === "ㅚ") {
    return r === 0 ? 10 : 11;
  } else if (el === "ㅜ" || el === "ㅠ") {
    return r === 0 ? 13 : 17;
  } else if (el === "ㅢ" || el === "ㅡ") {
    return r === 0 ? 18 : 19;
  } else {
    return S.indexOf(el);
  }
};
const testT = (el) => {
  if (el === "ㄱ" || el === "ㄲ" || el === "ㄳ" || el === "ㄺ" || el === "ㅋ") {
    let r = Math.floor(Math.random() * 5);
    return r === 0 ? 1 : r === 1 ? 2 : r === 2 ? 3 : r === 3 ? 24 : 9;
  } else if (el === "ㄴ" || el === "ㄵ" || el === "ㄶ") {
    let r = Math.floor(Math.random() * 3);
    return r === 0 ? 4 : r === 1 ? 5 : 6;
  } else if (el === "ㄼ" || el === "ㄿ" || el === "ㅂ" || el === "ㅄ") {
    let r = Math.floor(Math.random() * 4);
    return r === 0 ? 11 : r === 1 ? 14 : r === 2 ? 17 : 18;
  } else if (el === "ㅁ" || el === "ㄻ") {
    let r = Math.floor(Math.random() * 2);
    return r === 0 ? 16 : 10;
  } else if (
    el === "ㄷ" ||
    el === "ㄽ" ||
    el === "ㄾ" ||
    el === "ㅅ" ||
    el === "ㅆ" ||
    el === "ㅈ" ||
    el === "ㅊ" ||
    el === "ㅌ" ||
    el === "ㅎ" ||
    el === "ㅀ"
  ) {
    let r = Math.floor(Math.random() * 9);
    return r === 0
      ? 7
      : r === 1
      ? 12
      : r === 2
      ? 13
      : r === 3
      ? 19
      : r === 4
      ? 20
      : r === 5
      ? 22
      : r === 6
      ? 23
      : r === 7
      ? 25
      : r === 8
      ? 15
      : 27;
  } else if (el === "") {
    let r1 = Math.floor(Math.random() * 4);
    let r;
    if (r1 === 0) {
      r = Math.floor(Math.random() * 27);
    } else {
      r = 0;
    }
    return r;
  } else {
    return T.indexOf(el);
  }
};
function buttonHandler(e) {
  const entireSentence = textarea_input.value.toString().trim().split("");
  let answer = "";
  for (let i in entireSentence) {
    if (entireSentence[i] === " ") {
      answer += " ";
    } else if (entireSentence[i].charCodeAt(0) < 44032) {
      answer += entireSentence[i];
    } else {
      let str = getConstantVowel(entireSentence[i]);
      let top;
      let middle;
      let bottom;
      let random = Math.floor(Math.random() * 2);
      if (random === 0) {
        top = testF(str.f);
        middle = testS(str.s);
        bottom = T.indexOf(str.t);
      } else if (random === 1) {
        top = testF(str.f);
        middle = S.indexOf(str.s);
        bottom = testT(str.t);
      } else {
        top = F.indexOf(str.f);
        middle = testS(str.s);
        bottom = testT(str.t);
      }
      answer += String.fromCharCode(44032 + top * 588 + middle * 28 + bottom);
    }
  }

  textarea_output.innerText = answer;
}
