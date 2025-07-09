//  사용자입력
const MAX_SCORE = 100; // 입력할 수 있는 최대 숫자
let inputStr = prompt("점수를 입력하세요.");
console.log("입력점수", inputStr); // 입력한 숫자 콘솔출력

let input = parseInt(inputStr); //문자열 인자를 정수로 변환하는 역할

var score;
let grade;

// 최종점수 계산(5점추가)
if (isNaN(input) || input < 0 || input > MAX_SCORE) {
  console.log("잘못된 점수 입력입니다. 0~100 사이의 숫자를 입력해주세요.");
} else input >= 0 || input <= MAX_SCORE;
{
  let finalScore = input + 5; // 이항 산술 연산자
  console.log("최종점수", finalScore);
}

//등급결정(if) - S: 100 이상
// - A: 90 이상 100 미만
// - B: 80 이상 90 미만
// - C: 70 이상 80 미만
// - D: 60 이상 70 미만
// - F: 60 미만
let finalScore = input + 5;

if (finalScore >= 100) {
  grade = "S";
} else if (finalScore >= 90 && finalScore < 100) {
  grade = "A";
} else if (finalScore >= 80 && finalScore < 90) {
  grade = "B";
} else if (finalScore >= 70 && finalScore < 80) {
  grade = "C";
} else if (finalScore >= 60 && finalScore < 70) {
  grade = "D";
} else {
  grade = "F";
}

//합격/불합격여부결정  60점 이상이면 "Pass", 미만이면 "Fail".

const status = finalScore >= 60 ? "Pass" : "Fail";

//등급에 따른 콘솔로그출력 switch문 - **등급별 메시지**: 아래 메시지를 정확히 출력.
// - S: “Super!!”
// - A: "Excellent work!"
// - B: "Good job!"
// - C: "Satisfactory performance."
// - D: "Needs improvement."
// - F: "Please try harder!"
//
let message;
switch (grade) {
  case "S":
    message = "Super!!";
    break;
  case "A":
    message = "Excellent work!";
    break;
  case "B":
    message = "Good job!";
    break;
  case "C":
    message = "Satisfactory performance.";
    break;
  case "D":
    message = "Needs improvement.";
    break;
  case "F":
    message = "Please try harder!";
    break;

  default:
    message = "Invalid grade.";
    break;
}

// 콘솔 출력

console.log(`Final Score: ${finalScore}`);
console.log(`Grade: ${grade}`);
console.log(`Status: ${status}`);
console.log(`Message: ${message}`);
