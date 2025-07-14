document.addEventListener("DOMContentLoaded", () => {
  // DOM 요소 선택
  const taskInput = document.getElementById("taskInput");
  const addButton = document.getElementById("addButton");
  const taskList = document.getElementById("taskList");
  const clearButton = document.getElementById("clearButton");
  const taskCountSpan = document.getElementById("taskCount");
  const completedTaskCountSpan = document.getElementById("completedTaskCount");

  // 테마 전환 버튼 선택
  const defaultThemeButton = document.getElementById("defaultThemeButton");
  const darkThemeButton = document.getElementById("darkThemeButton");
  const pantoneThemeButton = document.getElementById("pantoneThemeButton");
  const themeButtons = [
    defaultThemeButton,
    darkThemeButton,
    pantoneThemeButton,
  ];

  // --- 테마 관련 함수 ---
  const applyTheme = (themeName) => {
    document.body.classList.remove("dark-theme", "pantone-theme"); // 기존 테마 클래스 모두 제거
    if (themeName === "dark") {
      document.body.classList.add("dark-theme");
    } else if (themeName === "pantone") {
      document.body.classList.add("pantone-theme");
    }
    localStorage.setItem("selectedTheme", themeName); // 선택된 테마 저장

    // 활성 버튼 스타일 업데이트
    themeButtons.forEach((button) => {
      button.classList.remove("active");
    });
    if (themeName === "default") {
      defaultThemeButton.classList.add("active");
    } else if (themeName === "dark") {
      darkThemeButton.classList.add("active");
    } else if (themeName === "pantone") {
      pantoneThemeButton.classList.add("active");
    }
  };

  // 페이지 로드 시 저장된 테마 불러오기
  const savedTheme = localStorage.getItem("selectedTheme");
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    applyTheme("default"); // 기본 테마 적용
  }

  // 테마 버튼 이벤트 리스너
  defaultThemeButton.addEventListener("click", () => applyTheme("default"));
  darkThemeButton.addEventListener("click", () => applyTheme("dark"));
  pantoneThemeButton.addEventListener("click", () => applyTheme("pantone"));

  // --- 기존 할 일 목록 기능 함수 ---
  taskList.innerHTML = ""; // 초기 샘플 할 일 제거

  const updateTaskCount = () => {
    const currentTasks = taskList.querySelectorAll("li");
    taskCountSpan.textContent = `현재 할 일: ${currentTasks.length}개`;
    updateCompletedTaskCount();
  };

  const updateCompletedTaskCount = () => {
    const completedTasks = taskList.querySelectorAll(".task-checkbox:checked");
    completedTaskCountSpan.textContent = `완료한 할 일: ${completedTasks.length}개`;
  };

  const addTask = () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("할 일을 입력해주세요!");
      return;
    }

    const listItem = document.createElement("li");
    listItem.classList.add("task-item");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("task-checkbox");

    checkBox.addEventListener("change", () => {
      taskSpan.classList.toggle("completed", checkBox.checked);
      updateCompletedTaskCount();
    });

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskSpan.classList.add("task-text");

    taskSpan.addEventListener("click", () => {
      taskSpan.classList.toggle("completed");
      checkBox.checked = taskSpan.classList.contains("completed");
      updateCompletedTaskCount();
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "삭제";
    deleteButton.classList.add("delete-button");

    deleteButton.addEventListener("click", () => {
      taskList.removeChild(listItem);
      updateTaskCount();
    });

    listItem.appendChild(checkBox);
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = "";
    updateTaskCount();
  };

  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

  clearButton.addEventListener("click", () => {
    const confirmDelete = confirm("정말로 모든 할 일을 삭제하시겠습니까?");

    if (confirmDelete) {
      taskList.innerHTML = "";
      updateTaskCount();
    }
  });

  updateTaskCount(); // 초기 로드 시 할 일 개수 업데이트
});
