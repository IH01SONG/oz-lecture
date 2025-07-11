// 영화 객체를 저장하는 배열 선언
let movies = [];

// 기본 장르를 정의하는 상수
const defaultGenre = "Unknown";

// 영화 정보 출력 함수 선언문
function printMovies(movieList) {
  console.log("Movie Collection:");

  // 영화 개수를 세는 변수 선언
  var count = 0;

  // for 반복문을 사용하여 영화 목록 출력
  for (let i = 0; i < movieList.length; i++) {
    let movie = movieList[i]; // let을 사용하여 각 영화 객체를 가져옴

    // 조건문을 사용하여 빈 속성 확인 및 기본값 설정
    if (!movie.title) movie.title = "Unknown";
    if (!movie.director) movie.director = "Unknown"; // 매개변수 기본값 예시: director = "Unknown"
    if (!movie.year) movie.year = 0;
    if (!movie.genre) movie.genre = defaultGenre;

    console.log(
      `${i + 1}. Title: ${movie.title}, Director: ${movie.director}, Year: ${
        movie.year
      }, Genre: ${movie.genre}`
    );
    count++; // 영화 개수 증가
  }

  console.log(`Total Movies: ${count}`);
}

// 최소 3개의 영화 객체를 하드코딩으로 배열에 추가
movies.push({
  title: "The Matrix",
  director: "Wachowskis",
  year: 1999,
  genre: "Sci-Fi",
});
movies.push({
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  genre: "Sci-Fi",
});
movies.push({
  title: "Parasite",
  director: "Bong Joon-ho",
  year: 2019,
  genre: "Drama",
});
// 빈 속성이 있는 영화 예시 (기본값 적용 확인용)
movies.push({
  title: "Eternal Sunshine of the Spotless Mind",
  director: "",
  year: 2004,
  genre: "",
});

// 영화 목록 출력 함수 호출
printMovies(movies);

// 영화 객체를 저장하는 배열 선언
let movies1 = [];

// 기본 장르를 정의하는 상수
const defaultGenre1 = "Unknown";

// 영화 정보 출력 함수 선언문
function printMovies1(movieList1) {
  console.log("Netplix Animation Movie Collection:");

  // 영화 개수를 세는 변수 선언
  var count = 0;

  // for 반복문을 사용하여 영화 목록 출력
  for (let i = 0; i < movieList1.length; i++) {
    let movie = movieList1[i]; // let을 사용하여 각 영화 객체를 가져옴

    // 조건문을 사용하여 빈 속성 확인 및 기본값 설정
    if (!movie.title) movie.title = "Unknown";
    if (!movie.director) movie.director = "Unknown"; // 매개변수 기본값 예시: director = "Unknown"
    if (!movie.year) movie.year = 0;
    if (!movie.genre) movie.genre = defaultGenre;

    console.log(
      `${i + 1}. Title: ${movie.title}, Director: ${movie.director}, Year: ${
        movie.year
      }, Genre: ${movie.genre}`
    );
    count++; // 영화 개수 증가
  }

  console.log(`Total Movies1: ${count}`);
}

// 최소 3개의 영화 객체를 하드코딩으로 배열에 추가
movies1.push({
  title: "귀멸의 칼날: 무한성 편",
  director: "소토자키 하루오",
  year: 2025,
  genre: "action, fantasy, Adventure",
});
movies1.push({
  title: "주술회전",
  director: "박성후",
  year: 2022,
  genre: "action, fantasy, supernatural",
});
movies1.push({
  title: "사카모토 데이즈",
  director: "스즈키 유우토",
  year: 2025,
  genre: "action, comedy",
});
// 빈 속성이 있는 영화 예시 (기본값 적용 확인용)
movies1.push({
  title: "Eternal Sunshine of the Spotless Mind",
  director: "",
  year: 2004,
  genre: "",
});

// 영화 목록 출력 함수 호출
printMovies1(movies1);
