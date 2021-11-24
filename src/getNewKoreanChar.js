import { F, S, T } from "./arrays";

export const getNewF = (el) => {
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

export const getNewS = (el) => {
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
export const getNewT = (el) => {
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
    let r1 = Math.floor(Math.random() * 3);
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
