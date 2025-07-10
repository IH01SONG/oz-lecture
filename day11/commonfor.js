// 0-4까지 콘솔찍는 코드
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 1-5까지 콘솔찍는 코드
for (let i = 1; i < 6; i++) {
  console.log(i);
}

// 1부터 10까지 홀수만 찍는 코드
for (let i = 1; i < 11; i += 2) {
  console.log(i);
}

// 중첩반복문
for (let i = 0; i < 2; i++) {
  console.log(`i: ${i}`);
  for (let k = 0; k < 2; k++) {
    console.log(`k: ${k}`);
  }
}

// for 문 안에 들어가는 if 문
// 1-10 짝수 콘솔에 찍기
// i = 0 부터 시작해야함
for (let i = 0; i <= 10; i += 2) {
  if (i === 0) {
    continue;
  }
  console.log(i);
}

//
for (let i = 0; i < 10; i++) {
  if (i === 5) break; // 5에서 멈춤
  //   if (i === 5) continue; // 5에서만 멈추고 그 뒤에는 계속 실행함
  console.log(i);
}

// for문과  array( 배열)
let arr = ["a", "b", "c"];
console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for in 배열
// for (item in arr) {
//   console.log(item);
// }
for (idx in arr) {
  console.log(arr[idx]);
}
// for of 배열
for (item of arr) {
  console.log(item);
}

let obj = {
  name: "철수",
  age: 20,
};
for (let key in obj) {
  console.log("key", key);
  console.log("val", obj[key]);
}
