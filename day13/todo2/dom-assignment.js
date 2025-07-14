document.addEventListener("DOMContentLoaded", () => {
  // DOM 요소 선택 (이전 코드와 동일)
  const taskInput = document.getElementById("taskInput");
  const addButton = document.getElementById("addButton");
  const taskList = document.getElementById("taskList");
  const clearButton = document.getElementById("clearButton");
  const taskCountDiv = document.getElementById("taskCount");

  // 초기 샘플 할 일 제거
  taskList.innerHTML = "";

  // 할 일 개수를 업데이트하는 함수 (이전 코드와 동일)
  const updateTaskCount = () => {
    const currentTasks = taskList.querySelectorAll("li");
    taskCountDiv.textContent = `현재 할 일: ${currentTasks.length}개`;
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

    // --- 체크박스 요소 생성 ---
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox"; // input 타입을 체크박스로 설정
    checkBox.classList.add("task-checkbox"); // CSS 스타일링을 위한 클래스 추가

    // 체크박스 변경 시 할 일 텍스트의 완료 상태 토글
    checkBox.addEventListener("change", () => {
      taskSpan.classList.toggle("completed", checkBox.checked);
      // taskSpan.classList.toggle('completed')만으로는 체크 해제 시에도 토글되므로,
      // checkBox.checked 값을 이용하여 명시적으로 제어합니다.
    });
    // -------------------------

    // 할 일 텍스트를 담을 <span> 요소 생성
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskSpan.classList.add("task-text");

    // 할 일 텍스트 클릭 시 완료 상태 토글 (체크박스와 동기화)
    taskSpan.addEventListener("click", () => {
      taskSpan.classList.toggle("completed");
      checkBox.checked = taskSpan.classList.contains("completed"); // 텍스트 클릭 시 체크박스 상태 동기화
    });

    // 삭제 버튼 생성
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "삭제";
    deleteButton.classList.add("delete-button");

    // 삭제 버튼 클릭 시 해당 항목 제거 이벤트 리스너
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(listItem);
      updateTaskCount();
    });

    // --- <li>에 체크박스, <span>, <button> 추가 ---
    listItem.appendChild(checkBox); // 체크박스를 가장 먼저 추가
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);
    // --------------------------------------------------

    // <ul> (taskList)에 <li> 추가
    taskList.appendChild(listItem);

    // 입력 필드 초기화
    taskInput.value = "";
    updateTaskCount();
  };

  // "추가" 버튼 클릭 이벤트 리스너 (이전 코드와 동일)
  addButton.addEventListener("click", addTask);

  // 입력창에서 Enter 키 이벤트 리스너 (이전 코드와 동일)
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // "전체 삭제" 버튼 클릭 이벤트 리스너 (이전 코드와 동일)
  clearButton.addEventListener("click", () => {
    const confirmDelete = confirm("정말로 모든 할 일을 삭제하시겠습니까?");

    if (confirmDelete) {
      taskList.innerHTML = "";
      updateTaskCount();
    }
  });

  // 페이지 로드 시 초기 할 일 개수 업데이트
  updateTaskCount();
});
