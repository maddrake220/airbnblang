import { F, S, T } from "./arrays";
export default function getConstantVowel(kor) {
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
