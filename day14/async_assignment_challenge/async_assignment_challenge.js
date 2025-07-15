// 변수 선언 - var, let, const 각각 최소 1회 사용
var API_BASE_URL = "https://jsonplaceholder.typicode.com/posts/"; // var 사용
let outputElement; // let 사용
const MAX_POST_ID = 100; // const 사용

// 화살표 함수로 여러 게시물 가져오기 (...rest 매개변수 사용)
const fetchMultiplePosts = async (...postIds) => {
  const results = {};

  // for...of로 ID 순회
  for (const id of postIds) {
    try {
      const response = await fetch(`${API_BASE_URL}${id}`);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const post = await response.json();
      results[`post${id}`] = {
        success: true,
        title: post.title,
        id: post.id,
      };
    } catch (error) {
      results[`post${id}`] = {
        success: false,
        error: error.message,
      };
    }
  }

  return results;
};

// 입력값 유효성 검사 함수
const validateInput = (input) => {
  if (!input || input.trim() === "") {
    return { valid: false, message: "유효한 ID(1-100)를 입력하세요!" };
  }

  const ids = input.split(",").map((item) => item.trim());
  const validIds = [];

  for (const id of ids) {
    const numId = Number(id);
    if (
      isNaN(numId) ||
      numId < 1 ||
      numId > MAX_POST_ID ||
      !Number.isInteger(numId)
    ) {
      return { valid: false, message: "유효한 ID(1-100)를 입력하세요!" };
    }
    validIds.push(numId);
  }

  return { valid: true, ids: validIds };
};

// 결과를 HTML에 렌더링하는 함수
const renderResults = (results) => {
  let html = "";

  // for...in으로 결과 객체 순회
  for (const postKey in results) {
    const result = results[postKey];

    if (result.success) {
      html += `<div class="post">
                <strong>${postKey}:</strong> ${result.title}
                <small class="d-block mt-1 text-muted">ID: ${result.id}</small>
            </div>`;
    } else {
      html += `<div class="post">
                <strong>${postKey}:</strong> <span class="text-danger">에러: ${result.error}</span>
            </div>`;
    }
  }

  outputElement.innerHTML = html;
};

// 에러 메시지 표시 함수
const showError = (message) => {
  outputElement.innerHTML = `<div class="error">${message}</div>`;
  outputElement.classList.add("error");

  // 3초 후 에러 클래스 제거
  setTimeout(() => {
    outputElement.classList.remove("error");
  }, 3000);
};

// 로딩 상태 표시 함수
const showLoading = () => {
  outputElement.innerHTML =
    '<div class="loading">🚀 데이터를 가져오는 중...</div>';
  outputElement.classList.remove("error");
};

// 함수 표현식으로 메인 로직 구현
const runChallenge = async function () {
  // DOM 요소 가져오기
  const postIdsInput = document.getElementById("postIds");
  const fetchButton = document.getElementById("fetchPosts");
  outputElement = document.getElementById("output");

  // 입력값 가져오기
  const inputValue = postIdsInput.value;

  // 입력값 유효성 검사
  const validation = validateInput(inputValue);

  if (!validation.valid) {
    showError(validation.message);
    return;
  }

  try {
    // 버튼 비활성화
    fetchButton.disabled = true;

    // 로딩 상태 표시
    showLoading();

    // 중복 제거
    const uniqueIds = [...new Set(validation.ids)];

    // 데이터 가져오기 (...rest 매개변수로 전달)
    const results = await fetchMultiplePosts(...uniqueIds);

    // 결과 렌더링
    renderResults(results);
  } catch (error) {
    showError(`예상치 못한 오류가 발생했습니다: ${error.message}`);
  } finally {
    // 버튼 재활성화
    fetchButton.disabled = false;
  }
};

// DOM이 완전히 로드된 후 이벤트 리스너 등록
document.addEventListener("DOMContentLoaded", function () {
  // 버튼 클릭 이벤트
  const fetchButton = document.getElementById("fetchPosts");
  fetchButton.addEventListener("click", runChallenge);

  // Enter 키 이벤트
  const postIdsInput = document.getElementById("postIds");
  postIdsInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      runChallenge();
    }
  });

  // 초기 상태 설정
  outputElement = document.getElementById("output");
  outputElement.innerHTML =
    '<div style="text-align: center; color: rgba(255,255,255,0.6); font-style: italic;">🌌 게시물 ID를 입력하고 버튼을 클릭하세요 🌌</div>';
});

// 전역 스코프에서 디버깅용 함수 (개발 시에만 사용)
window.debugChallenge = function () {
  console.log("🚀 Debug Info:");
  console.log("API_BASE_URL:", API_BASE_URL);
  console.log("MAX_POST_ID:", MAX_POST_ID);
  console.log("현재 입력값:", document.getElementById("postIds").value);
};
