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

//////////////////////////////////////////////////

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

/**
 * 특정 장르의 영화를 검색하여 콘솔에 출력하는 함수입니다.
 * @param {Array<Object>} movieList - 검색할 영화 객체 배열
 * @param {string} genre - 검색할 장르 (대소문자 구분 없음)
 */
function searchMoviesByGenre(movieList, genre) {
  console.log(`\n${genre} Movies:`);
  let foundMovies = [];

  for (let i = 0; i < movieList.length; i++) {
    const movie = movieList[i];
    // 영화 객체의 속성을 순회하며 장르 확인
    if (movie.genre && movie.genre.toLowerCase() === genre.toLowerCase()) {
      foundMovies.push(movie);
    }
  }

  if (foundMovies.length === 0) {
    console.log(`No movies found for genre: ${genre}.`);
  } else {
    for (let i = 0; i < foundMovies.length; i++) {
      const movie = foundMovies[i];
      console.log(
        `${i + 1}. Title: ${movie.title}, Director: ${movie.director}, Year: ${
          movie.year
        }, Genre: ${movie.genre}`
      );
    }
  }
}

/**
 * 영화 목록의 평균 출판년도를 계산하는 함수입니다.
 * @param {Array<Object>} movieList - 평균을 계산할 영화 객체 배열
 * @returns {number} - 평균 출판년도
 */
const calculateAverageYear = function (movieList) {
  if (movieList.length === 0) {
    return 0;
  }
  let totalYears = 0;
  for (let i = 0; i < movieList.length; i++) {
    totalYears += movieList[i].year;
  }
  return totalYears / movieList.length;
};

/**
 * 영화 목록에서 가장 최신 영화를 찾는 함수입니다.
 * @param {Array<Object>} movieList - 최신 영화를 찾을 영화 객체 배열
 * @returns {Object|null} - 가장 최신 영화 객체 또는 영화가 없으면 null
 */
const findNewestMovie = (movieList) => {
  if (movieList.length === 0) {
    return null;
  }
  let newestMovie = movieList[0];
  for (let i = 1; i < movieList.length; i++) {
    if (movieList[i].year > newestMovie.year) {
      newestMovie = movieList[i];
    }
  }
  return newestMovie;
};

/**
 * 여러 영화 객체를 한 번에 `movies` 배열에 추가하는 함수입니다.
 * 나머지 매개변수 (`...newMovies`)를 사용합니다.
 * @param {...Object} newMovies - 추가할 영화 객체들
 */
function addMovies(...newMovies) {
  newMovies.forEach((movie) => movies.push(movie));
}

// --- 영화 데이터 추가 ---
// `addMovies` 함수와 `...rest` 매개변수를 사용하여 여러 영화 객체를 한 번에 추가
addMovies(
  { title: "The Matrix", director: "Wachowskis", year: 1999, genre: "Sci-Fi" },
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genre: "Sci-Fi",
  },
  { title: "Parasite", director: "Bong Joon-ho", year: 2019, genre: "Drama" },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    director: "Michel Gondry",
    year: 2004,
    genre: "",
  }, // 빈 속성 예시
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    genre: "Sci-Fi",
  },
  {
    title: "Arrival",
    director: "Denis Villeneuve",
    year: 2016,
    genre: "Sci-Fi",
  }
);

// --- 전체 영화 목록 출력 ---
printMovies(movies);

// 영화 검색 기능

// 특정 장르의 영화 검색
searchMoviesByGenre(movies, "Sci-Fi");
searchMoviesByGenre(movies, "Drama");
searchMoviesByGenre(movies, "Comedy"); // 결과 없음 예시

// 통계 계산 기능

console.log("\nStatistics:");

// 평균 출판년도 계산 및 출력
const averageYear = calculateAverageYear(movies);
console.log(`Average Year: ${averageYear.toFixed(2)}`); // 소수점 둘째 자리까지 표시

// 가장 최신 영화 찾기 및 출력
const newestMovie = findNewestMovie(movies);
if (newestMovie) {
  console.log(`Newest Movie: ${newestMovie.title} (${newestMovie.year})`);
} else {
  console.log("No movies to find the newest.");
}
