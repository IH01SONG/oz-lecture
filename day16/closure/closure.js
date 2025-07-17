// 전역변수와 지역변수

let globalVar = "I am global";

function myFunction() {
  let localVar = "I am local";
  console.log(globalVar);
  console.log(localVar);
}
myFunction();

console.log(globalVar);
// console.log(localVar);

//클로저 - 카운트 상태 변경 함수

const increase = function () {
  let num = 0;
  return function () {
    return ++num;
  };
};
console.log(increase());
console.log(increase()());

const increase1 = (function () {
  let num = 0;
  return function () {
    return ++num;
  };
})();
console.log(increase1());
console.log(increase1());
console.log(increase1());
console.log(increase1());

const counter = function () {
  let num1 = 0; // 카운트 상태 변수 (state)
  return {
    increase() {
      return ++num1;
    },
    decrease() {
      return -num1;
    },
  };
};

const counter1 = (function () {
  let num1 = 0; // 카운트 상태 변수 (state)
  return {
    increase() {
      return ++num1;
    },
    decrease() {
      return -num1;
    },
  };
})();

console.log(counter.increase);
console.log(counter.increase);
console.log(counter.decrease);
console.log(counter.decrease);
console.log(counter1.increase());
console.log(counter1.increase());
console.log(counter1.decrease());
console.log(counter1.decrease());
