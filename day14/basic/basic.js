// 비동기 개념

// console.log("이미지 로딩 시작");

// setTimeout(() => {
// console.log("이미지 로딩");
// }, 2000); // 2초 후 함수실행

// console.log("이미지 로딩");
// console.log("다른 작업 수행");

// 콜백함수 1매개변수name, 2매개변수callback함수
function sayHello(name, callback) {
  console.log(`안녕, ${name}`);
  callback();
}
sayHello("학생", () => {
  //
  console.log("콜백 실행");
});
