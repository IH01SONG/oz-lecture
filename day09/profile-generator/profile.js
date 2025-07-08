// 변수선언

const NAME = "EYE-DOT"; // 상수값이라 대문자로 사용 const 대문자
let templateString = `나의 이름은 ${NAME}입니다.`;
console.log(templateString);

var snacks = "쌀로별";
var snacks = "꼬북칩";
console.log(snacks);

let age = 30;
age = 20;
console.log(age);

// 문자열 처리
// string 문자열
let string1 = "내 이름은 'EYE DOT'입니다.";
let string2 = "너의 이름은?";
console.log("string1", string1);
console.log("string2", string2);

//   string 문자열 연결
let stringA = "저의 이름은" + " '송윤주'입니다.";
let stringB = string1 + " " + string2;
console.log("stringA", stringA);
console.log("stringB", stringB);

//   ES6 문자열 백틱`
let myName = "songyoonju";
let oldString = "나의 이름은 " + myName + "입니다. \n당신의 이름은 무엇일까요?";
let es6String = `나의 이름은 ${myName}입니다.
당신의 이름은 무엇입니까?`;
console.log(oldString);
console.log(es6String);
let hobby = "my hobbies: ";

// 배열 리터럴
let hobbies = ["reading,", "gaming,", "coding."];
console.log(hobbies);
console.log(hobbies[1]);
console.log(hobby, hobbies[0], hobbies[1], hobbies[2]);

// 객체 리터럴
let iAmObj = {
  name: "song", //  name라는 key가 song이라는 value를 가진 attribute(속성)이 있다.
  age: 20,
  isStudent: true,
};
console.log(iAmObj);

// boolean
let boolean3 = 11 < 100;
let boolean4 = 10 > 20;

console.log(boolean3, boolean3);
console.log(boolean4, boolean4);

// typeof

console.log(typeof age);
console.log(typeof hobbies);

console.log(typeof boolean3);
console.log(typeof snacks);
