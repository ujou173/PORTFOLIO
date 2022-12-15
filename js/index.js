// 섹션간 이동
const $bg = document.querySelector(".bg");
// 파워버튼 영역
const $power_con = document.querySelector(".power_con");
$power_con.addEventListener("click", function () {
  $bg.style.cssText = `
      transform: translate(0%, -14.814%);
      transition: 0.7s;
    `;
  setTimeout(function () {
    $bg.style.cssText = `
      transform: translate(-30.885%, -14.814%);
      transition: 1.2s;
    `;
  }, 710);
});

const $sec2_prev = document.querySelector(".sec2 .prev");
$sec2_prev.addEventListener("click", function () {
  // sec2의 프로필이 출력중일 경우 닫고 처음으로 돌아감
  if ($sec2_desc.classList.contains("on")) {
    $sec2_desc.classList.remove("on");
    $bg.style.cssText = `
      transform: translate(-30.885%, -14.814%);
      transition: 0.3s;
    `;
    setTimeout(function () {
      $bg.style.cssText = `
      transform: translate(0%, -14.814%);
        transition: 0.3s;
      `;
    }, 400);
    setTimeout(function () {
      $bg.style.cssText = `
        transform: translate(0,0);
        transition: 0.5s;
      `;
    }, 800);
  } else {
    // sec2의 프로필이 출력중이 아닐경우 바로 돌아감
    $bg.style.cssText = `
        transform: translate(0%, -14.814%);
        transition: 0.3s;
      `;
    setTimeout(function () {
      $bg.style.cssText = `
        transform: translate(0,0);
        transition: 0.5s;
      `;
    }, 500);
  }
});

// 프로필 영역
const $profile = document.querySelector(".sec2 > h2");
const $sec2_desc = document.querySelector(".sec2_desc");
$profile.addEventListener("click", function () {
  if ($sec2_desc.classList.contains("on")) {
    $sec2_desc.classList.remove("on");
    $bg.style.cssText = `
      transform: translate(-30.885%, -14.814%);
      transition: 0.6s;
    `;
  } else {
    $bg.style.cssText = `
  transform: translate(-50%, -25%);
  transition: 0.7s;
  `;
    $sec2_desc.classList.add("on");
  }
});

const $sec2_next = document.querySelector(".sec2 .next");
$sec2_next.addEventListener("click", function () {
  if ($sec2_desc.classList.contains("on")) {
    // sec2 프로필이 출력중일 경우 프로필을 닫고 원상 복귀 후 이동
    $sec2_desc.classList.remove("on");
    $bg.style.cssText = `
      transform: translate(-30.885%, -14.814%);
      transition: 0.6s;
    `;
    setTimeout(function () {
      $bg.style.cssText = `
    transform: translate(-30.885%, -55.414%);
    transition: 1.2s;
    `;
    }, 850);
  } else {
    $bg.style.cssText = `
    transform: translate(-30.885%, -55.414%);
    transition: 1.2s;
    `;
  }
});

// 프로젝트 영역
const $project = document.querySelector(".sec3 > h2");
const $sec3_desc = document.querySelector(".sec3 > article");
$project.addEventListener("click", function () {
  if ($sec3_desc.classList.contains("on")) {
    $sec3_desc.classList.remove("on");
    $bg.style.cssText = `
    transform: translate(-30.885%, -55.414%);
    transition: 0.6s;
    `;
  } else {
    $sec3_desc.classList.add("on");
    $bg.style.cssText = `
  transform: translate(-11.4584%, -50%);
  transition: 0.6s;
  `;
  }
});

const $sec3_prev = document.querySelector(".sec3 > .prev");
$sec3_prev.addEventListener("click", function () {
  if ($sec3_desc.classList.contains("on")) {
    $sec3_desc.classList.remove("on");
    $bg.style.cssText = `
    transform: translate(-30.885%, -55.414%);
    transition: 0.6s;
    `;
    setTimeout(function () {
      $bg.style.cssText = `
      transform: translate(-30.885%, -14.814%);
      transition: 0.6s;
    `;
    }, 610);
  } else {
    $bg.style.cssText = `
    transform: translate(-30.885%, -14.814%);
    transition: 0.6s;
  `;
  }
});

const $sec3_next = document.querySelector(".sec3 > .next");
$sec3_next.addEventListener("click", function () {
  if ($sec3_desc.classList.contains("on")) {
    $sec3_desc.classList.remove("on");
    $bg.style.cssText = `
    transform: translate(-30.885%, -55.414%);
    transition: 0.6s;
    `;
    setTimeout(function () {
      $bg.style.cssText = `
      transform: translate(-30.885%, -70.414%);
      transition: 0.3s;
      `;
    }, 610);
    setTimeout(function () {
      $bg.style.cssText = `
      transform: translate(0%, -70.414%);
      transition: 0.5s;
      `;
    }, 960);
    setTimeout(function () {
      $bg.style.cssText = `
      transform: translate(0%, -75%);
      transition: 0.3s;
      `;
    }, 1470);
  } else {
    $bg.style.cssText = `
    transform: translate(-30.885%, -70.414%);
    transition: 0.3s;
    `;
    setTimeout(function () {
      $bg.style.cssText = `
      transform: translate(0%, -70.414%);
      transition: 0.5s;
      `;
    }, 320);
    setTimeout(function () {
      $bg.style.cssText = `
      transform: translate(0%, -75%);
      transition: 0.3s;
      `;
    }, 840);
  }
});

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

// sec4 타이핑 텍스트
const $typingTextSec4 = document.querySelector(".sec4_typing_text");

const sec4Letters = ["같이 일할 퍼블리셔를 찾고 계신가요?"];

const typingSpeedSec4 = 60;
let i4 = 0;

// sec4 타이핑 효과
const sec4Typing = async function () {
  const sec4Letter = sec4Letters[i4].split("");

  while (sec4Letter.length) {
    await wait(typingSpeedSec4);
    $typingTextSec4.innerHTML += sec4Letter.shift();
  }
  await wait(2500);

  sec4Remove();
};

// sec4타이핑 지우는 효과
const sec4Remove = async function () {
  const sec4Letter = sec4Letters[i4].split("");

  while (sec4Letter.length) {
    await wait(typingSpeedSec4);
    sec4Letter.pop();
    $typingTextSec4.innerHTML = sec4Letter.join("");
  }

  i4 = !sec4Letters[i4 + 1] ? 0 : i4 + 1;
  await wait(1000);
  sec4Typing();
};

function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

setTimeout(typing, 1500);
setTimeout(sec4Typing, 1500);

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
