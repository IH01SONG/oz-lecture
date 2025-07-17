// script.js

// 도서 데이터를 저장할 배열
const books = [];
// 대여 상태를 관리할 배열 (클로저 객체들을 저장)
const rentals = [];

// 도서 추가 기능
function addBook() {
  const titleInput = document.getElementById("bookTitle");
  const priceInput = document.getElementById("bookPrice");
  const title = titleInput.value.trim();
  const price = Number(priceInput.value);

  if (title === "" || isNaN(price) || price <= 0) {
    alert("도서 제목과 유효한 가격(0 이상)을 입력하세요!");
    return;
  }

  const book = { title, price };
  books.push(book);

  // 대여 상태 클로저 객체 생성 및 저장
  const rental = createBookRental(title); // 클로저 생성
  rentals.push(rental);

  const bookList = document.getElementById("bookList");
  const li = document.createElement("li");
  li.className = "book-item";
  li.innerHTML = `
        <span>${title} - ${price}원 (대여 가능)</span>
        <button onclick="removeBook(this)">삭제</button>
        <button onclick="toggleRental(this)">대여/반납</button>
    `;
  bookList.appendChild(li);

  titleInput.value = "";
  priceInput.value = "";

  // 도서 추가 후 자동으로 결과 영역을 업데이트 (선택 사항)
  processBooks();
}

// 삭제 기능 (기본 과제 + 도전 과제)
function removeBook(button) {
  // li 요소와 제목 추출
  const li = button.parentElement;
  const text = li.querySelector("span").textContent; // 예: "책1 - 5000원 (대여 가능)"
  // 정규식을 사용하여 괄호 안의 내용을 포함하여 제목을 정확히 추출
  const match = text.match(/^(.*?)\s-\s\d+원/);
  const title = match ? match[1].trim() : ""; // "책1"

  // TODO : books 배열에서 도서 제거 (findIndex, splice 사용)
  const bookIndex = books.findIndex((book) => book.title === title);
  if (bookIndex > -1) {
    books.splice(bookIndex, 1);
  }

  // TODO(도전과제) : rentals 배열에서 대여 상태 제거 (findIndex, splice 사용)
  const rentalIndex = rentals.findIndex(
    (rental) => rental.getStatus().title === title
  );
  if (rentalIndex > -1) {
    rentals.splice(rentalIndex, 1);
  }

  // DOM에서 li 제거
  li.remove();

  // 도서 삭제 후 자동으로 결과 영역을 업데이트
  processBooks();
  showAllRentalStatus();
}

// 도서 데이터 처리 (기본 과제)
function processBooks() {
  // TODO : map 제목에 "Book: " 접두사 추가
  const prefixedBooks = books.map((book) => ({
    ...book, // 기존 속성을 복사
    title: `Book: ${book.title}`, // 새로운 제목으로 덮어쓰기
  }));

  // TODO : filter 10000원 이상 도서
  const highPriceBooks = books.filter((book) => book.price >= 10000);

  // TODO : reduce 총 가격 계산
  const totalPrice = books.reduce((sum, book) => sum + book.price, 0);

  // 결과 표시
  const resultsDiv = document.getElementById("results");
  let html = "<h3>모든 도서:</h3><ul>";
  if (prefixedBooks.length === 0) {
    html += "<li>도서가 없습니다.</li>";
  } else {
    prefixedBooks.forEach((book) => {
      html += `<li>${book.title} - ${book.price}원</li>`;
    });
  }
  html += "</ul>";

  html += "<h3>고가 도서 (10,000원 이상):</h3><ul>";
  if (highPriceBooks.length === 0) {
    html += "<li>고가 도서가 없습니다.</li>";
  } else {
    highPriceBooks.forEach((book) => {
      html += `<li>${book.title} - ${book.price}원</li>`;
    });
  }
  html += "</ul>";

  html += `<h3>총 가격:</h3><p>${totalPrice}원</p>`;
  resultsDiv.innerHTML = html;
}

// 클로저로 대여 상태 관리
const createBookRental = (bookTitle) => {
  let isBorrowed = false; // 이 변수는 클로저에 의해 '기억'됩니다.
  let borrowCount = 0; // 이 변수도 클로저에 의해 '기억'됩니다.

  return {
    borrow: () => {
      if (isBorrowed) {
        alert(`${bookTitle}은(는) 이미 대여 중입니다.`);
        return false;
      }
      isBorrowed = true;
      borrowCount++;
      return true;
    },
    returnBook: () => {
      isBorrowed = false;
    },
    getStatus: () => ({
      title: bookTitle,
      isBorrowed,
      borrowCount,
    }),
  };
};

// 대여/반납 토글 (도전 과제)
function toggleRental(button) {
  const li = button.parentElement;
  const text = li.querySelector("span").textContent;
  // 정규식을 사용하여 괄호 안의 내용을 포함하여 제목을 정확히 추출
  const match = text.match(/^(.*?)\s-\s\d+원/);
  const title = match ? match[1].trim() : "";

  // TODO(도전과제) : rentals에서 title과 동일한 요소 찾기
  const rental = rentals.find((r) => r.getStatus().title === title);
  if (!rental) {
    console.error("해당 도서의 대여 정보를 찾을 수 없습니다:", title);
    return;
  }

  const status = rental.getStatus();
  // TODO(도전과제) : books에서 title과 동일한 요소 찾기 (가격 정보를 가져오기 위함)
  const book = books.find((b) => b.title === title);
  if (!book) {
    console.error("해당 도서를 찾을 수 없습니다:", title);
    return;
  }

  if (status.isBorrowed) {
    rental.returnBook();
    li.querySelector(
      "span"
    ).textContent = `${title} - ${book.price}원 (대여 가능)`;
  } else {
    if (rental.borrow()) {
      // 대여 성공 시에만 텍스트 변경
      li.querySelector(
        "span"
      ).textContent = `${title} - ${book.price}원 (대여 중)`;
    }
  }
  // 대여 상태 변경 후 모든 대여 상태를 다시 표시
  showAllRentalStatus();
}

// 모든 대여 상태 표시
function showAllRentalStatus() {
  const resultsDiv = document.getElementById("results");
  let html = "<h3>도서별 대여 상태:</h3><ul>";
  if (rentals.length === 0) {
    html += "<li>대여 정보가 없습니다.</li>";
  } else {
    rentals.forEach((rental) => {
      const status = rental.getStatus();
      html += `<li>${status.title}: ${
        status.isBorrowed ? "대여 중" : "대여 가능"
      } (총 ${status.borrowCount}회 대여)</li>`;
    });
  }
  html += "</ul>";

  // 기존 processBooks 결과가 있다면 그 아래에 추가
  // 여기서는 기존 내용을 덮어쓰지 않고, 새로운 섹션을 추가하는 방식으로 구현
  // 만약 항상 showAllRentalStatus() 결과만 보고 싶다면 resultsDiv.innerHTML = html; 로 변경
  // 과제 요구사항에 맞춰 기존 processBooks 결과 뒤에 대여 상태를 추가하는 방식으로 변경했습니다.
  // 만약 별도의 영역에 표시하고 싶다면 HTML에 새로운 div를 만들어야 합니다.
  resultsDiv.innerHTML += html;
}

// 초기 로딩 시 결과 영역을 비워두거나 초기 메시지 표시
// addBook이 호출될 때마다 processBooks와 showAllRentalStatus를 호출하므로 초기화는 불필요
// 그러나 페이지 로드 시 빈 상태를 보여주기 위해 한번 호출할 수 있습니다.
document.addEventListener("DOMContentLoaded", () => {
  // 페이지 로드 시 초기 상태를 보여주기 위해 호출 (선택 사항)
  processBooks();
  showAllRentalStatus();
});
