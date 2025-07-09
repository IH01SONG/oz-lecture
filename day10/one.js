//전치연산과 후치연산
//후치연산의 특징
let increment = 10; //increment 라는 공간을 만들어 그 공간에 10이라는 값을 설정하는 과정을 한줄에 표현
console.log("1", increment);
increment++;
console.log("2", increment);
console.log("3", increment++);
console.log("4", increment);

let decrement = 10;
console.log("dec1", decrement);
decrement--;
console.log("dec2", decrement);
console.log("dec3", decrement--); // 콘솔 찍은후 더함.
console.log("dec4", decrement);

//전치연산의 특징
let incFirst = 10;
console.log("incFirst1", incFirst);
++incFirst;
console.log("incFirst2", incFirst);
console.log("incFirst3", ++incFirst); // 콘솔 찍히기 전에 더함
console.log("incFirst4", incFirst);

let decFirst = 10;
console.log("decFirst1", decFirst);
--decFirst;
console.log("decFirst2", decFirst);
console.log("decFirst3", --decFirst); // 콘솔 찍히기 전에 빼기
console.log("decFirst4", decFirst);

// console.log(++a) 전치연산
let a = 10;
a = a + 1;
console.log(a);

// console.log(b++) 후치연산
let b = 10;
console.log(b);
b = b + 1;

// let c = c++; // 계산을 하면서 할당하는건 불가능하다.

// 단항 부정 연산자
let num = -10;
num = -num; // 여기가 할당하는 부분
console.log("-(-10)", num);

let num2 = 10;
num = -num2;
console.log("num2", num2);

let num3 = 10;
-num3; // 계산했지만 변수에 할당하지 않으면 변하지않는다.
console.log(num3);
