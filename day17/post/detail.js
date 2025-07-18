// post 상세화면용 자바스크립트
const apiUrl = "https://jsonplaceholder.typicode.com";
const CACHE_EXPIRATION_TIME = 5 * 60 * 1000; // 5 minutes in milliseconds

// 포스트 렌더링 함수
function renderPost(post) {
  const postDetail = document.getElementById("post-detail");
  if (post && post.title && post.body) {
    postDetail.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;
  } else {
    postDetail.innerHTML = "<p>Post details could not be loaded.</p>";
  }
}

// 포스트 상세정보 표시
async function displayPostDetail() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    //이부분에서 'postId"라는 이름으로 파라미터를 가져오는지 확인
    const postId = urlParams.get("postId");

    if (!postId) {
      // 조건문 에러메세지 출력
      throw new Error("No post ID provided in the URL.");
    }

    const cacheKey = `post_${postId}`;
    let post = null;

    // 로컬 스토리지에서 캐시된 데이터 확인
    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData);
      // 캐시된 데이터가 여전히 유효한지 확인(5분 이내)
      if (Date.now() - timestamp < CACHE_EXPIRATION_TIME) {
        post = data;
        console.log(`Post loaded from localStorage (key: ${cacheKey})`);
      } else {
        console.log(
          `Post cache expired for key: ${cacheKey}. Fetching from API.`
        );
        localStorage.removeItem(cacheKey); // 만료된 캐시 제거
      }
    }

    // 유효한 캐시가 없는 경우 API에서 가져오기
    if (!post) {
      const response = await fetch(`${apiUrl}/posts/${postId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      post = await response.json();
      console.log(`Post fetched from API (ID: ${postId})`);

      // 가져온 데이터를 timestamp 함께 localStore에 저장
      const dataToCache = {
        data: post,
        timestamp: Date.now(),
      };
      localStorage.setItem(cacheKey, JSON.stringify(dataToCache));
    }

    renderPost(post); // 게시물 세부 정보 렌더링
  } catch (error) {
    console.error("Error:", error.message);
    document.getElementById("post-detail").innerHTML = `
            <p style="color: red;">Error: ${error.message}. Failed to load post details.</p>
        `;
  }
}

// 페이지가 로드될 때 displayPostDetail 호출
document.addEventListener("DOMContentLoaded", displayPostDetail);
