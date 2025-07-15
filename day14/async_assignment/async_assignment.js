// DOM 요소 가져오기
const timerInput = document.getElementById("timerInput");
const startButton = document.getElementById("startTimer");
const timerDisplay = document.getElementById("timerDisplay");

// 상수 및 변수 선언 (요구사항 충족)
const MIN_TIME = 1;
const MAX_TIME = 10;
let timerId = null; // setInterval의 ID를 저장하기 위한 변수
var timerMessage = ""; // 'var' 사용 요구사항을 위한 변수

// 타이머 시작 버튼에 이벤트 리스너 추가
startButton.addEventListener("click", () => {
  // 입력값 가져오기 및 숫자로 변환
  const seconds = Number(timerInput.value);

  // 입력 유효성 검사 (조건문과 연산자 사용)
  if (isNaN(seconds) || seconds < MIN_TIME || seconds > MAX_TIME) {
    // 에러 메시지 표시
    timerDisplay.textContent = `유효한 숫자(${MIN_TIME}-${MAX_TIME})를 입력하세요!`;
    timerDisplay.classList.add("error"); // .error 클래스 추가
    return; // 유효하지 않으면 함수 종료
  }

  // 이전 에러 스타일 제거 및 버튼 비활성화
  timerDisplay.classList.remove("error");
  startButton.disabled = true;

  // 타이머 로직 함수 호출
  startTimer(seconds);
});

/**
 * 카운트다운 타이머를 시작하는 함수
 * @param {number} seconds - 카운트다운할 총 시간(초)
 */
function startTimer(seconds) {
  let remainingTime = seconds;

  // 즉시 첫 시간 표시
  timerDisplay.textContent = `타이머: ${remainingTime}초`;

  // 기존에 실행 중인 타이머가 있다면 중지
  if (timerId) {
    clearInterval(timerId);
  }

  // setInterval을 사용한 비동기 처리
  timerId = setInterval(() => {
    remainingTime--;

    // 남은 시간에 따라 화면 업데이트
    if (remainingTime > 0) {
      timerMessage = `타이머: ${remainingTime}초`;
      timerDisplay.textContent = timerMessage;
    } else {
      // 타이머 종료 처리
      clearInterval(timerId); // 반복 중지
      timerDisplay.textContent = "타이머 종료!";
      startButton.disabled = false; // 버튼 다시 활성화
      timerInput.value = ""; // 입력란 비우기
    }
  }, 1000); // 1초마다 실행
}
