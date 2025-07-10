//  사용자에게 1에서 10 사이의 숫자를 입력하라는 메시지가 표시되고 별이 그만큼 많이 인쇄됩니다.
//  유효한 입력이 수신될 때까지 계속 프롬프트가 표시됩니다.

function runStarPrinter() {
  // 변수선언 var, let, const
  const maxStars = 10; // 허용되는 최대 별 수
  let input; // 사용자 입력 -프롬프트
  var stars = ""; // 별만드는 문자열 string

  // 유효한 번호가 제공될 때까지 반복적으로 입력을 요청하는 루프
  while (true) {
    input = prompt(`Enter the number of stars (1-${maxStars}):`);

    // 입력이 유효한지 확인
    // !isNaN(입력)은 입력이 숫자인지 확인
    // 입력 >= 1 & & 입력 <= maxStars는 숫자가 유효한 범위 내에 있는지 확인
    if (!isNaN(input) && input >= 1 && input <= maxStars) {
      // 입력이 유효한 경우 루프 종료
      break;
    } else {
      // 입력이 유효하지 않은 경우 오류 메시지를 출력하고 다음 반복으로 계속 진행
      console.log("Invalid input! Enter a number between 1 and 10.");
      continue;
    }
  }

  // 유효한 입력을 숫자로 변환
  const count = parseInt(input);

  //함수를 호출하여 별을 인쇄
  printStars(count);
}

/**
 * 콘솔에 지정된 수의 별을 인쇄
 *
 * @param {number} count 출력할 별의 수  0 또는 음수일 경우 기본값은 1
 */
function printStars(count = 1) {
  // 카운트의 기본 매개변수 값
  let starString = ""; // 별의 빈 문자열 초기화

  // 카운트가 1 이상인지 확인
  if (count < 1) {
    count = 1;
  }

  // for 루프를 사용하여 별 문자열 만들기
  for (let i = 0; i < count; i++) {
    starString += "⭐"; // 각 반복마다 별을 추가
  }

  // String.prototype.repeat() as a simple alternative:
  // starString = "⭐".repeat(count);

  console.log(starString); // 콘솔에 최종 별 문자열 인쇄
}

// 메인 기능을 호출하여 프로그램 시작
runStarPrinter();

// 1. 함수 표현식: 역순 별 출력
const printReverseStars = function (count = 1) {
  console.log("--- 역순 별 출력 ---");
  // 입력이 0 또는 음수일 경우 기본값 1 사용
  if (count < 1) {
    count = 1;
  }

  for (let i = count; i >= 1; i--) {
    let stars = "";
    for (let j = 0; j < i; j++) {
      stars += "⭐";
    }
    console.log(stars);
  }
};

// 2. 화살표 함수: 사각형 패턴 출력
const printSquare = (count = 1) => {
  console.log("--- 사각형 패턴 출력 ---");
  // 입력이 0 또는 음수일 경우 기본값 1 사용
  if (count < 1) {
    count = 1;
  }

  for (let i = 0; i < count; i++) {
    let row = "";
    for (let j = 0; j < count; j++) {
      row += "⭐";
    }
    console.log(row);
  }
};

// 3. for...in 사용: 패턴 정보 객체 순회 출력
const printPredefinedPatterns = () => {
  console.log("--- 사전 정의된 패턴 출력 ---");
  const patterns = {
    pattern1: "⭐⭐⭐⭐⭐",
    pattern2: "⭐⭐⭐",
    pattern3: "⭐",
    customPattern: "⭐⭐⭐⭐⭐⭐⭐⭐",
  };

  for (let key in patterns) {
    // hasOwnProperty를 사용하여 프로토타입 체인에 있는 속성은 건너뜁니다.
    if (patterns.hasOwnProperty(key)) {
      console.log(`${key}: ${patterns[key]}`);
    }
  }
};

// 4. ...rest 사용: 여러 숫자를 받아 각 숫자에 대해 별 출력
const printMultipleStars = (...counts) => {
  console.log("--- 여러 숫자 별 출력 ---");
  if (counts.length === 0) {
    console.log("출력할 숫자가 없습니다.");
    return;
  }

  for (const count of counts) {
    // printStars 함수는 기존 과제에서 정의된 함수를 사용한다고 가정합니다.
    // 여기서는 간단히 재정의하여 사용합니다.
    let starString = "";
    let effectiveCount = count < 1 ? 1 : count; // 0 또는 음수일 경우 1로 처리
    for (let i = 0; i < effectiveCount; i++) {
      starString += "⭐";
    }
    console.log(`입력 ${count}: ${starString}`);
  }
};

// --- 함수 호출 예시 ---

// 1. 역순 별 출력 호출
printReverseStars(5);
printReverseStars(3);
printReverseStars(0); // 기본값 1 적용

// 2. 사각형 패턴 출력 호출
printSquare(4);
printSquare(2);
printSquare(-1); // 기본값 1 적용

// 3. 사전 정의된 패턴 출력 호출
printPredefinedPatterns();

// 4. 여러 숫자 별 출력 호출
printMultipleStars(2, 5, 1, 7);
printMultipleStars(); // 인자 없이 호출
