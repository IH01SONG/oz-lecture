console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// 1씩 중가하는 while 반복문
let num = 1;
while (num <= 100) {
  console.log(num);
  num++; // num + 1 (num += 2)
} // 반복문의 조건이 계속 참으로 평가되어 반복문이 끝나지 않고 무한히 실행될 수 있기 때문에 조심!
console.log("반복문 종료");
console.log("num", num);

// 2씩 증가하는 while 반목문
// let num2 = 1;
// while (num2 <= 100);
// {
//   console.log(num2);
//   num2 += 2; // num2 = num2 + 2
// }
