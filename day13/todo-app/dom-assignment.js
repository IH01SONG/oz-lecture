// 과제:
// HTML 파일에 연결하여 브라우저에서 실행하세요

// 초기 샘플 할 일 제거 (HTML에 있던 "To Do List" 항목)
// 앱 시작 시 빈 상태로 시작하려면 이 줄을 추가합니다.
taskList.innerHTML = "";

// DOM 요소 선택
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const clearButton = document.getElementById("clearButton");

// 할 일 개수 업데이트 함수
function updateTaskCount() {
  const taskItems = taskList.querySelectorAll("li"); // 모든 <li> 요소를 선택
  taskCountDiv.textContent = `현재 할 일: ${taskItems.length}개`;
}

// 입력값 검증 및 할 일 추가 함수
function addTask() {
  const taskText = taskInput.value.trim();

  // 입력값이 비어있는지 확인 (유효성 검증) early-return;
  console.log(taskText);
  if (taskText === "") {
    alert("할일을 입력해주세요");
    return;
  }

  // 새로운 리스트 아이템 생성
  const listItem = document.createElement("li");
  listItem.className = "task-item";

  // 할 일 텍스트 추가
  const span = document.createElement("span");
  span.textContent = taskText;
  span.classList.add("task-text");

  span.addEventListener("click", () => {
    span.classList.toggle("completed"); // 완료 상태 토글
  });

  // 삭제 버튼 생성
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "삭제";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(listItem); // 해당 할 일 삭제 (taskList 사용)
  });

  // <li>에 <span>과 <button> 추가
  listItem.appendChild(span);
  listItem.appendChild(deleteButton);

  // <ul>에 <li> 추가 (taskList 사용)
  taskList.appendChild(listItem);

  // 입력 필드 초기화
  taskInput.value = "";
}

// 삭제 버튼 이벤트 리스너
//   deleteButton.addEventListener("click", function () {
//     taskList.removeChild(li);
//   });

// 완료 상태 토글 이벤트 리스너
//   addEventListener
// span.classList.toggle("completed")

// 요소 조립
// li.appendChild(span);
// taskList.appendChild(li);

// 모든 할 일 삭제 함수
function clearAllTasks() {}

// 추가 버튼 클릭 이벤트 적용
addButton.addEventListener("click", addTask);

// 입력창에서 Enter 키 이벤트 적용 (event.key === 'Enter')
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

// 전체 삭제 버튼 클릭 이벤트 적용
clearButton.addEventListener("click", () => {
  taskList.innerHTML = ""; // 모든 할 일 제거 (taskList 사용)
});
