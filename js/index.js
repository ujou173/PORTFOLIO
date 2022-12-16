// 백그라운드
const $bg = document.querySelector(".bg");
const $lineBg = document.querySelector(".line_bg");
const $line = document.querySelector(".line");
const $power = document.querySelector(".sec1 > div");
const $dot = document.querySelector(".elec_dot");
const $sec4TypingDiv = document.querySelector(".sec4_typing_div");

// gnb 영역
const $gnb = document.querySelector(".gnb");
const $gnbList = document.querySelectorAll(".gnb li");
const $gnbAnchor = document.querySelectorAll(".gnb li button");

// gnb 현재 섹션 표시
function gnbActive(gnbNum) {
  $gnbList.forEach(function (a) {
    a.classList.remove("on");
  });
  $gnbList[gnbNum].classList.add("on");
}

let now = "s1";
console.log(now);

let dest = 0;
console.log(dest);

let gnbCount = 0;

// 진행중인 내용
// 1. 이동 함수가 실행중에 도착지에 도착하면 함수 실행 중지
// if (now == dest) {실행중지}
// return이나 break가 안됨. 일시 보류
//
// 2. gnb에서 섹션 누를경우 해당 섹션만 on 나머지 remove.on

// 도착지 설정
function destination(j) {
  if (j.classList.contains("circle")) {
    dest = 0;
    console.log(dest);
  } else if (j.classList.contains("rect")) {
    dest = 1;
    console.log(dest);
  } else if (j.classList.contains("rhomb")) {
    dest = 2;
    console.log(dest);
  } else if (j.classList.contains("circle2")) {
    dest = 3;
    console.log(dest);
  }
}

// gnb 클릭시 해당 섹션으로 이동
$gnbAnchor.forEach(function (h) {
  h.addEventListener("click", function () {
    console.log(h);
    destination(h);
    gnbActive(dest);
    console.log(dest);
    gnbMove();
  });
});

// --------------------------------------GNB 이동 함수------------------------------------------------
function gnbMove() {
  console.log("함수실행");
  if (now == "s4") {
    console.log("if문 진입");
    Sec4ToSec3();
    if (dest < 2) {
      setTimeout(() => {
        Sec3ToSec2();
      }, 920);
      if (dest < 1) {
        setTimeout(() => {
          Sec2ToSec1();
        }, 1530);
      }
    }
  } else if (now == "s3") {
    if (dest == 3) {
      Sec3ToSec4();
    } else {
      Sec3ToSec2();
      if (dest < 1) {
        setTimeout(() => {
          Sec2ToSec1();
        }, 610);
      }
    }
  } else if (now == "s2") {
    if (dest == 0) {
      Sec2ToSec1();
    } else {
      Sec2ToSec3();
      if (dest > 2) {
        setTimeout(() => {
          Sec3ToSec4();
        }, 1210);
      }
    }
  }
}

//-----------------------------------섹션 간 이동------------------------------------------------

// sec2 on/off -----------------------------------------
const $profile = document.querySelector(".sec2 > h2");
const $sec2_desc = document.querySelector(".sec2_desc");
$profile.addEventListener("click", function () {
  if ($sec2_desc.classList.contains("on")) {
    $profile.classList.remove("on");
    $sec2_desc.classList.remove("on");
    $bg.style.cssText = `
      transform: translate(-30.885%, -14.814%);
      transition: 0.6s;
    `;
    $lineBg.style.cssText = `
      transform: translate(-30.885%, -14.814%);
      transition: 0.6s;
    `;
    setTimeout(function () {
      $dot.classList.remove("off");
    }, 610);
  } else {
    $profile.classList.add("on");
    $dot.classList.add("off");
    $bg.style.cssText = `
      transform: translate(-50%, -25%);
      transition: 0.7s;
    `;
    $lineBg.style.cssText = `
      transform: translate(-50%, -25%);
      transition: 0.7s;
    `;
    $sec2_desc.classList.add("on");
  }
});
// sec2 on/off -----------------------------------------

// sec1에서 sec2로 이동 -------------------------------------
const $power_con = document.querySelector(".power_con");

function Sec1ToSec2() {
  now = "s2";
  console.log(now);
  $power.classList.add("on");
  $line.classList.add("on");
  setTimeout(function () {
    $bg.style.cssText = `
      transform: translate(0%, -14.814%);
      transition: 0.5s;
    `;
    $lineBg.style.cssText = `
      transform: translate(0%, -14.814%);
      transition: 0.5s;
    `;
  }, 510);
  setTimeout(function () {
    $bg.style.cssText = `
      transform: translate(-30.885%, -14.814%);
      transition: 1.2s;
    `;
    $lineBg.style.cssText = `
      transform: translate(-30.885%, -14.814%);
      transition: 1.2s;
    `;
    $gnb.classList.add("on");
    gnbActive(1);
  }, 1120);
}
// sec1에서 sec2로 이동 -------------------------------------

// sec2에서 sec1로 이동 -------------------------------------
const $sec2_prev = document.querySelector(".sec2 .prev");
function Sec2ToSec1() {
  now = "s1";
  console.log(now);
  $gnb.classList.remove("on");
  // sec2의 프로필이 출력중일 경우 닫고 처음으로 돌아감
  if ($sec2_desc.classList.contains("on")) {
    $profile.classList.remove("on");
    $sec2_desc.classList.remove("on");
    $bg.style.cssText = `
      transform: translate(-30.885%, -14.814%);
      transition: 0.5s;
    `;
    $lineBg.style.cssText = `
      transform: translate(-30.885%, -14.814%);
      transition: 0.5s;
    `;
    setTimeout(function () {
      $dot.classList.remove("off");
      $bg.style.cssText = `
      transform: translate(0%, -14.814%);
        transition: 0.4s;
      `;
      $lineBg.style.cssText = `
      transform: translate(0%, -14.814%);
        transition: 0.4s;
      `;
    }, 510);
    setTimeout(function () {
      $bg.style.cssText = `
        transform: translate(0,0);
        transition: 0.5s;
      `;
      $lineBg.style.cssText = `
        transform: translate(0,0);
        transition: 0.5s;
      `;
    }, 910);
    setTimeout(function () {
      $power.classList.remove("on");
      $line.classList.remove("on");
    }, 1200);
  } else {
    // sec2의 프로필이 출력중이 아닐경우 바로 돌아감
    $bg.style.cssText = `
        transform: translate(0%, -14.814%);
        transition: 0.3s;
      `;
    $lineBg.style.cssText = `
        transform: translate(0%, -14.814%);
        transition: 0.3s;
      `;
    setTimeout(function () {
      $bg.style.cssText = `
        transform: translate(0,0);
        transition: 0.5s;
      `;
      $lineBg.style.cssText = `
        transform: translate(0,0);
        transition: 0.5s;
      `;
    }, 500);
    setTimeout(function () {
      $power.classList.remove("on");
      $line.classList.remove("on");
    }, 900);
  }
}
// sec2에서 sec1로 이동 -------------------------------------

// sec2에서 sec3로 이동 -------------------------------------
const $sec2_next = document.querySelector(".sec2 .next");
function Sec2ToSec3() {
  now = "s3";
  console.log(now);
  if ($sec2_desc.classList.contains("on")) {
    // sec2 프로필이 출력중일 경우 프로필을 닫고 원상 복귀 후 이동
    $profile.classList.remove("on");
    $sec2_desc.classList.remove("on");
    $bg.style.cssText = `
      transform: translate(-30.885%, -14.814%);
      transition: 0.6s;
    `;
    $lineBg.style.cssText = `
      transform: translate(-30.885%, -14.814%);
      transition: 0.6s;
    `;
    setTimeout(function () {
      $dot.classList.remove("off");
      $bg.style.cssText = `
    transform: translate(-30.885%, -55.414%);
    transition: 1.2s;
    `;
      $lineBg.style.cssText = `
    transform: translate(-30.885%, -55.414%);
    transition: 1.2s;
    `;
      gnbActive(2);
    }, 850);
  } else {
    $bg.style.cssText = `
    transform: translate(-30.885%, -55.414%);
    transition: 1.2s;
    `;
    $lineBg.style.cssText = `
    transform: translate(-30.885%, -55.414%);
    transition: 1.2s;
    `;
    gnbActive(2);
  }
}
// sec2에서 sec3로 이동 -------------------------------------

// sec3 on/off -------------------------------------------------
const $project = document.querySelector(".sec3 > h2");
const $projectWrap = document.querySelector(".sec3 .project_wrap");
const $sec3_desc = document.querySelector(".sec3 .project_wrap > article");
$project.addEventListener("click", function () {
  if ($sec3_desc.classList.contains("on")) {
    $projectWrap.classList.remove("on");
    $sec3_desc.classList.remove("on");
    $project.classList.remove("on");
    $bg.style.cssText = `
    transform: translate(-30.885%, -55.414%);
    transition: 0.6s;
    `;
    $lineBg.style.cssText = `
    transform: translate(-30.885%, -55.414%);
    transition: 0.6s;
    `;
    setTimeout(function () {
      $dot.classList.remove("off");
    }, 610);
  } else {
    $dot.classList.add("off");
    $projectWrap.classList.add("on");
    $sec3_desc.classList.add("on");
    $project.classList.add("on");
    $bg.style.cssText = `
    transform: translate(-11.4584%, -50%);
    transition: 0.6s;
  `;
    $lineBg.style.cssText = `
    transform: translate(-11.4584%, -50%);
    transition: 0.6s;
  `;
  }
});
// sec3 on/off -------------------------------------------------

// sec3에서 sec2로 이동 -------------------------------------
const $sec3_prev = document.querySelector(".sec3 > .prev");
function Sec3ToSec2() {
  now = "s2";
  console.log(now);
  if ($sec3_desc.classList.contains("on")) {
    $projectWrap.classList.remove("on");
    $sec3_desc.classList.remove("on");
    $project.classList.remove("on");
    $bg.style.cssText = `
    transform: translate(-30.885%, -55.414%);
    transition: 0.6s;
    `;
    $lineBg.style.cssText = `
    transform: translate(-30.885%, -55.414%);
    transition: 0.6s;
    `;
    setTimeout(function () {
      $dot.classList.remove("off");
      $bg.style.cssText = `
      transform: translate(-30.885%, -14.814%);
      transition: 0.6s;
    `;
      $lineBg.style.cssText = `
      transform: translate(-30.885%, -14.814%);
      transition: 0.6s;
    `;
      gnbActive(1);
    }, 610);
  } else {
    $bg.style.cssText = `
    transform: translate(-30.885%, -14.814%);
    transition: 0.6s;
  `;
    $lineBg.style.cssText = `
    transform: translate(-30.885%, -14.814%);
    transition: 0.6s;
  `;
    gnbActive(1);
  }
}
// sec3에서 sec2로 이동 -------------------------------------

// sec3에서 sec4 이동 --------------------------------------------
const $sec3_next = document.querySelector(".sec3 > .next");
function Sec3ToSec4() {
  now = "s4";
  console.log(now);
  if ($sec3_desc.classList.contains("on")) {
    $projectWrap.classList.remove("on");
    $sec3_desc.classList.remove("on");
    $project.classList.remove("on");
    $bg.style.cssText = `
    transform: translate(-30.885%, -55.414%);
    transition: 0.6s;
    `;
    $lineBg.style.cssText = `
    transform: translate(-30.885%, -55.414%);
    transition: 0.6s;
    `;
    setTimeout(function () {
      $dot.classList.remove("off");
      $bg.style.cssText = `
      transform: translate(-30.885%, -70.414%);
      transition: 0.6s;
      `;
      $lineBg.style.cssText = `
      transform: translate(-30.885%, -70.414%);
      transition: 0.6s;
      `;
      gnbActive(3);
    }, 610);
    setTimeout(function () {
      $bg.style.cssText = `
      transform: translate(0%, -70.414%);
      transition: 1s;
      `;
      $lineBg.style.cssText = `
      transform: translate(0%, -70.414%);
      transition: 1s;
      `;
    }, 1220);
    setTimeout(function () {
      $bg.style.cssText = `
      transform: translate(0%, -75%);
      transition: 0.5s;
      `;
      $lineBg.style.cssText = `
      transform: translate(0%, -75%);
      transition: 0.5s;
      `;
    }, 2230);
    $sec4TypingDiv.classList.add("on");
  } else {
    $bg.style.cssText = `
    transform: translate(-30.885%, -70.414%);
    transition: 0.6s;
    `;
    $lineBg.style.cssText = `
    transform: translate(-30.885%, -70.414%);
    transition: 0.6s;
    `;
    setTimeout(function () {
      $bg.style.cssText = `
      transform: translate(0%, -70.414%);
      transition: 1s;
      `;
      $lineBg.style.cssText = `
      transform: translate(0%, -70.414%);
      transition: 1s;
      `;
      gnbActive(3);
    }, 610);
    setTimeout(function () {
      $bg.style.cssText = `
      transform: translate(0%, -75%);
      transition: 0.5s;
      `;
      $lineBg.style.cssText = `
      transform: translate(0%, -75%);
      transition: 0.5s;
      `;
    }, 1620);
    $sec4TypingDiv.classList.add("on");
  }
}
// sec3에서 sec4 이동 --------------------------------------------

// sec4에서 sec3 이동 --------------------------------------------
const $sec4_prev = document.querySelector(".sec4 > .prev");
function Sec4ToSec3() {
  now = "s3";
  console.log(now);
  $bg.style.cssText = `
  transform: translate(0%, -70.414%);
      transition: 0.3s;
      `;
  $lineBg.style.cssText = `
  transform: translate(0%, -70.414%);
      transition: 0.3s;
      `;
  setTimeout(function () {
    $bg.style.cssText = `
    transform: translate(-30.885%, -70.414%);
    transition: 0.6s;
    `;
    $lineBg.style.cssText = `
    transform: translate(-30.885%, -70.414%);
    transition: 0.6s;
    `;
    gnbActive(2);
  }, 310);
  setTimeout(function () {
    $sec4TypingDiv.classList.remove("on");
    $bg.style.cssText = `
    transform: translate(-30.885%, -55.414%);
    transition: 0.3s;
    `;
    $lineBg.style.cssText = `
    transform: translate(-30.885%, -55.414%);
    transition: 0.3s;
    `;
  }, 920);
}
// sec4에서 sec3 이동 --------------------------------------------

$power_con.addEventListener("click", function () {
  Sec1ToSec2();
});
$sec2_prev.addEventListener("click", function () {
  Sec2ToSec1();
});
$sec2_next.addEventListener("click", function () {
  Sec2ToSec3();
});
$sec3_prev.addEventListener("click", function () {
  Sec3ToSec2();
});
$sec3_next.addEventListener("click", function () {
  Sec3ToSec4();
});
$sec4_prev.addEventListener("click", function () {
  Sec4ToSec3();
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
const $pg = document.querySelectorAll(".page");

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

  // $pg.forEach(function (item) {
  //   item.classList.remove("on");
  // });

  // if (pgIdx < 2) {
  //   pgIdx = pgIdx + 1;
  //   console.log(pgIdx);
  // } else {
  //   pgIdx = 0;
  //   console.log(pgIdx);
  // }

  // $pg[pgIdx].classList.add("on");
  // console.log($pg[pgIdx]);
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

// 보류
// $pg.forEach(function (item, idx) {
//   item.addEventListener("click", function (g) {
//     g.preventDefault();
//     pgAct(idx);
//   });
// });

// function pgAct(num1) {
//   $pg.forEach(function (p, i) {
//     p.classList.remove("on");
//   });
//   $pg[num1].classList.add("on");
// }
