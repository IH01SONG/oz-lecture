document.addEventListener("DOMContentLoaded", () => {
  // DOM 요소 선택
  const taskInput = document.getElementById("taskInput");
  const addButton = document.getElementById("addButton");
  const taskList = document.getElementById("taskList");
  const clearButton = document.getElementById("clearButton");
  const taskCountSpan = document.getElementById("taskCount"); // '현재 할 일' 표시용 span
  const completedTaskCountSpan = document.getElementById("completedTaskCount"); // '완료한 할 일' 표시용 span

  // 초기 샘플 할 일 제거
  taskList.innerHTML = "";

  // 모든 할 일 개수를 업데이트하는 함수
  const updateTaskCount = () => {
    const currentTasks = taskList.querySelectorAll("li");
    taskCountSpan.textContent = `현재 할 일: ${currentTasks.length}개`;
    updateCompletedTaskCount(); // 전체 할 일 개수 업데이트 시 완료 개수도 함께 업데이트
  };

  // 완료된 할 일 개수를 업데이트하는 함수
  const updateCompletedTaskCount = () => {
    const completedTasks = taskList.querySelectorAll(".task-checkbox:checked"); // 체크된 체크박스만 선택
    completedTaskCountSpan.textContent = `완료한 할 일: ${completedTasks.length}개`;
  };

  // 할 일 추가 함수
  const addTask = () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("할 일을 입력해주세요!");
      return;
    }

    // 새로운 <li> 요소 생성
    const listItem = document.createElement("li");
    listItem.classList.add("task-item");

    // 체크박스 요소 생성
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("task-checkbox");

    // 체크박스 변경 시 할 일 텍스트의 완료 상태 토글 및 완료 개수 업데이트
    checkBox.addEventListener("change", () => {
      taskSpan.classList.toggle("completed", checkBox.checked);
      updateCompletedTaskCount(); // 체크박스 상태 변경 시 완료 개수 업데이트
    });

    // 할 일 텍스트를 담을 <span> 요소 생성
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskSpan.classList.add("task-text");

    // 할 일 텍스트 클릭 시 완료 상태 토글 (체크박스와 동기화) 및 완료 개수 업데이트
    taskSpan.addEventListener("click", () => {
      taskSpan.classList.toggle("completed");
      checkBox.checked = taskSpan.classList.contains("completed");
      updateCompletedTaskCount(); // 텍스트 클릭 시 완료 개수 업데이트
    });

    // 삭제 버튼 생성
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "삭제";
    deleteButton.classList.add("delete-button");

    // 삭제 버튼 클릭 시 해당 항목 제거 이벤트 리스너 및 모든 개수 업데이트
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(listItem);
      updateTaskCount(); // 전체 할 일 개수 및 완료 할 일 개수 업데이트
    });

    // <li>에 체크박스, <span>, <button> 추가
    listItem.appendChild(checkBox);
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);

    // <ul> (taskList)에 <li> 추가
    taskList.appendChild(listItem);

    // 입력 필드 초기화
    taskInput.value = "";
    updateTaskCount(); // 새로운 할 일 추가 후 모든 개수 업데이트
  };

  // "추가" 버튼 클릭 이벤트 리스너
  addButton.addEventListener("click", addTask);

  // 입력창에서 Enter 키 입력 시 할 일 추가 이벤트 리스너
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // "전체 삭제" 버튼 클릭 이벤트 리스너
  clearButton.addEventListener("click", () => {
    const confirmDelete = confirm("정말로 모든 할 일을 삭제하시겠습니까?");

    if (confirmDelete) {
      taskList.innerHTML = "";
      updateTaskCount(); // 전체 삭제 후 모든 개수 업데이트
    }
  });

  // 페이지 로드 시 초기 할 일 개수 업데이트
  updateTaskCount();
});
