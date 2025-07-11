// const fruits = ["사과", "바나나", "오렌지"]; // 리터럴표기법
const fruits = new Array("사과", "바나나", "오렌지"); // 위와 같다 다르게 표현
console.log(fruits);
console.log(fruits.length);
console.log(fruits[1]);

const mixed = [1, "Hello", true, { name: "홍길동" }];
console.log(mixed);

// Array.push 배열요소 마지막 인덱스에 추가
fruits.push("딸기");
console.log(fruits);
console.log(fruits.length);
console.log(fruits[1]);

// Array.pop() 배열 마지막 요소 삭제, 삭제된 요소를 반환
const removed = fruits.pop();
console.log(fruits);
console.log(fruits.length);
console.log("removed: ", removed);

// Array.shift()  배열 첫번째 요소 삭제, 삭제된 요소 반환
const removedshift = fruits.shift();
console.log(fruits);
console.log(fruits.length);
console.log("removedshift: ", removedshift);

// Array.unshift()  배열 첫번째 요소 삭제, 삭제된 요소 반환
const removedunshift = fruits.unshift("수박");
console.log(fruits);
console.log(fruits.length);
console.log("removedunshift: ", removedunshift);
