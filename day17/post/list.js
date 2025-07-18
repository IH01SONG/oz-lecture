// list.js (포스트 목록 화면용 JavaScript)

const apiUrl = "https://jsonplaceholder.typicode.com";

// 포스트 목록 표시
async function displayPosts() {
  try {
    const response = await fetch(`${apiUrl}/posts`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const posts = await response.json();

    const postList = document.getElementById("post-list");
    postList.innerHTML = ""; // 기존 목록 초기화

    posts.forEach((post) => {
      const li = document.createElement("li");
      li.textContent = post.title;
      li.dataset.postId = post.id;
      // 중요: 포스트 클릭 시 상세 페이지로 이동하는 부분 확인

      li.addEventListener("click", () => {
        // 이 부분이 핵심입니다. postId가 정확히 전달
        window.location.href = `detail.html?postId=${post.id}`;
      });
      postList.appendChild(li);
    });
  } catch (error) {
    // Log errors to the console and display a user-friendly message
    console.error("Error: Failed to fetch posts", error);
    const postList = document.getElementById("post-list");
    postList.innerHTML =
      '<li style="color: red;">Failed to load posts. Please try again.</li>';
  }
}

// 페이지 로드 시 포스트 목록 표시
document.addEventListener("DOMContentLoaded", displayPosts);
