// 섹션간 이동

// sec1 타이핑 텍스트
const $typingText = document.querySelector(".typing_text");

const letters = ["Hello, World!", "사람과 대화하듯이, 컴퓨터와 대화하는", "코딩을 즐기는 퍼블리셔 노수민입니다."];

const typingSpeed = 60;
let i = 0;

// 타이핑 효과
const typing = async function () {
  const letter = letters[i].split("");

  while (letter.length) {
    await wait(typingSpeed);
    $typingText.innerHTML += letter.shift();
  }
  await wait(1500);

  remove();
};

// 타이핑 지우는 효과
const remove = async function () {
  const letter = letters[i].split("");

  while (letter.length) {
    await wait(typingSpeed);
    letter.pop();
    $typingText.innerHTML = letter.join("");
  }

  i = !letters[i + 1] ? 0 : i + 1;
  typing();
};

function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

setTimeout(typing, 1500);

// sec3 포트폴리오 리스트
const $ProjectCon = document.querySelector(".project_con");
const $ProjectList = document.querySelectorAll(".project_list");
const $PgPrev = document.querySelector(".pg_prev");
const $PgNext = document.querySelector(".pg_next");
const $Pg = document.querySelectorAll(".page");

let firstList = $ProjectCon.firstElementChild;
let lastList = $ProjectCon.lastElementChild;

let $pagenation = document.querySelector(".pagenation");
let pgActive = $pagenation.getElementsByClassName("on");
console.log($pagenation);
console.log(pgActive);

$PgNext.addEventListener("click", nextSl);
$PgPrev.addEventListener("click", prevSl);

function nextSl() {
  $ProjectCon.style.cssText = `margin-left: -100%; transition: 0.5s`;
  setTimeout(() => {
    $ProjectCon.insertBefore(firstList, null);
    $ProjectCon.style.cssText = `margin-left = 0`;
  }, 500);
  firstList = $ProjectCon.firstElementChild;
  lastList = $ProjectCon.lastElementChild;
}

function prevSl() {
  firstList = $ProjectCon.firstElementChild;
  lastList = $ProjectCon.lastElementChild;
  $ProjectCon.insertBefore(lastList, firstList);
  $ProjectCon.style.cssText = `margin-left: -100%;`;
  setTimeout(() => {
    $ProjectCon.style.cssText = `margin-left = 0; transition: 0.5s`;
  }, 0);
}
