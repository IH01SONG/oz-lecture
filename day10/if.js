let num = 0; //num 이라는 변수에 0 / 1 / -1  할당

if (num > 0) {
  console.log("양수");
} else if (num === 0) {
  console.log("0");
} else {
  console.log("음수");
}

const LIMIT = 80;
let score = 90;

if (score < LIMIT) {
  console.log("낙제");
  if (score === 0) {
    console.log("점수 0 : 검토필요");
  }
} else {
  if (score > 90) {
    isGoodStudent = true;
    console.log("A");
  } else if (score > 80) {
    isGoodStudent = false;
    console.log("B");
  }
}
