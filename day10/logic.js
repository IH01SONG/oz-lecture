// 논리연산자
// And 연산사 && 양쪽 다 트루여야함
// 숫자형 문자열 전부 논리 값으로 평가
// 빈문자열, undefined, 0, null 만 거짓으로 평가 나머지는 참으로 평가
// 연산결과가 거짓으로 평가되면 거짓으로 평가된 피연산자를 반환 - 가장 마지막 연산자?

true && true; // t
true && false && true; // f

"" && "cat";

let math = 80;
let avg = 90;
let english = 100;

let isMathLowAvg = math < avg;
console.log("isMathLowAvg", isMathLowAvg);

let isEnglishLowAvg = english < avg;
console.log("isEnglishLowAvg", isEnglishLowAvg);

// 수학점수가 평균보다 낮고, 영어점수도 평균보다 낮아? (And)
console.log(isMathLowAvg && isEnglishLowAvg); // 영어는 평균보다 높았기떄문에 f

// 수학점수가 평균보다 낮거나, 영어점수가 평균보다 낮아? (or)
console.log(isMathLowAvg || isEnglishLowAvg);

// 부정 연산자
console.log("!false", !false);
console.log("!true", !true);

console.log(!true);
console.log(false);
console.log("!true && false", !true && false);
console.log("!(true && false)", !(true && false));
