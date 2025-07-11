const pw = "123";
if (pw.length < 4) {
  console.log("최소4자리 입력하세요.");
}

const email = "test!naver.com";
console.log(email.includes("@"));
if (!email.includes("@")) {
  //@ 미포함인경우
  console.log("이메일 형식 확인하세요");
}

console.log(email[0]);
console.log(email[1]);
console.log(email[2]);
console.log(email[3]);
console.log(email[4]);
console.log(email.indexOf("@"));
console.log(email.indexOf("!"));
// 찾는단어가 없을경우 -1로 표현되기때문에 아래함수 이용가능.
if (email.indexOf("@") < 0) {
  //@미포함
  console.log("이메일 형식 확인하세요.");
}
