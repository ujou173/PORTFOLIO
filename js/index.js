// 백그라운드
const $bg = document.querySelector(".bg");
const $lineBg = document.querySelector(".line_bg");
const $line = document.querySelector(".line");
const $power = document.querySelector(".sec1 > div");
const $dot = document.querySelector(".elec_dot");
const $sec4TypingDiv = document.querySelector(".sec4_typing_div");
const $H1 = document.querySelector("h1");

// gnb 영역
const $gnb = document.querySelector(".gnb");
const $gnbList = document.querySelectorAll(".gnb li");
const $gnbAnchor = document.querySelectorAll(".gnb li button");

// 현재 위치 확인용 변수
let now = 0;

// 목적지 설정 변수
let dest = 0;

// gnb 현재 섹션 표시 함수
function gnbActive(gnbNum) {
  $gnbList.forEach(function (a) {
    a.classList.remove("on");
  });
  $gnbList[gnbNum].classList.add("on");
}

// 도착지 설정 함수
function destination(j) {
  if (j.classList.contains("circle")) {
    dest = 0;
  } else if (j.classList.contains("rect")) {
    dest = 1;
  } else if (j.classList.contains("rhomb")) {
    dest = 2;
  } else if (j.classList.contains("circle2")) {
    dest = 3;
  }
}

// gnb 클릭시 해당 섹션으로 이동
$gnbAnchor.forEach(function (h) {
  h.addEventListener("click", function () {
    destination(h);
    gnbActive(now);
    gnbMove();
  });
});

// --------------------------------------GNB 이동 함수------------------------------------------------
function gnbMove() {
  if (now == 3) {
    if (dest < 3) {
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
    }
  } else if (now == 2) {
    if (dest == 3) {
      Sec3ToSec4();
    } else {
      Sec3ToSec2();
      if (dest < 1) {
        setTimeout(() => {
          Sec2ToSec1();
        }, 1210);
      }
    }
  } else if (now == 1) {
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
  } else if (now == 0) {
    if (dest > 0) {
      Sec1ToSec2();
      if (dest > 1) {
        setTimeout(() => {
          Sec2ToSec3();
        }, 2330);
        if (dest > 2) {
          setTimeout(() => {
            Sec3ToSec4();
          }, 3540);
        }
      }
    }
  }
}

//-----------------------------------섹션 간 이동------------------------------------------------

// sec2 on/off -----------------------------------------
const $profile = document.querySelector(".sec1_1 > h2");
const $sec2_desc = document.querySelector(".sec2_desc");
$profile.addEventListener("click", function () {
  if ($sec2_desc.classList.contains("on")) {
    $profile.classList.remove("on");
    $sec2_desc.classList.remove("on");
    $gnb.classList.remove("off");
    $H1.classList.remove("off");
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
    $gnb.classList.add("off");
    $H1.classList.add("off");
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
// sec2 on/off END -----------------------------------------

// sec1에서 sec2로 이동 -------------------------------------
const $power_con = document.querySelector(".power_con");

function Sec1ToSec2() {
  now = 1;
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
    gnbActive(1);
  }, 1120);
}
// sec1에서 sec2로 이동 END -------------------------------------

// sec2에서 sec1로 이동 -------------------------------------
const $sec2_prev = document.querySelector(".sec1_1 .prev");
function Sec2ToSec1() {
  now = 0;
  // sec2의 프로필이 출력중일 경우 닫고 처음으로 돌아감
  if ($sec2_desc.classList.contains("on")) {
    $profile.classList.remove("on");
    $sec2_desc.classList.remove("on");
    $gnb.classList.remove("off");
    $H1.classList.remove("off");
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
      gnbActive(0);
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
      gnbActive(0);
    }, 500);
    setTimeout(function () {
      $power.classList.remove("on");
      $line.classList.remove("on");
    }, 900);
  }
}
// sec2에서 sec1로 이동 END -------------------------------------

// sec2에서 sec3로 이동 -------------------------------------
const $sec2_next = document.querySelector(".sec1_1 .next");
function Sec2ToSec3() {
  now = 2;
  if ($sec2_desc.classList.contains("on")) {
    // sec2 프로필이 출력중일 경우 프로필을 닫고 원상 복귀 후 이동
    $profile.classList.remove("on");
    $sec2_desc.classList.remove("on");
    $gnb.classList.remove("off");
    $H1.classList.remove("off");
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
// sec2에서 sec3로 이동 END -------------------------------------

// sec3 on/off -------------------------------------------------
const $project = document.querySelector(".sec2_1 > h2");
const $projectWrap = document.querySelector(".sec3 .project_wrap");
const $sec3_desc = document.querySelector(".sec3 .project_wrap > article");
$project.addEventListener("click", function () {
  if ($sec3_desc.classList.contains("on")) {
    $projectWrap.classList.remove("on");
    $sec3_desc.classList.remove("on");
    $project.classList.remove("on");
    $gnb.classList.remove("off");
    $H1.classList.remove("off");
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
    $gnb.classList.add("off");
    $H1.classList.add("off");
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
// sec3 on/off END -------------------------------------------------

// sec3에서 sec2로 이동 -------------------------------------
const $sec3_prev = document.querySelector(".sec2_1 > .prev");
function Sec3ToSec2() {
  now = 1;
  if ($sec3_desc.classList.contains("on")) {
    $projectWrap.classList.remove("on");
    $sec3_desc.classList.remove("on");
    $project.classList.remove("on");
    $gnb.classList.remove("off");
    $H1.classList.remove("off");
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
// sec3에서 sec2로 이동 END -------------------------------------

// sec3에서 sec4 이동 --------------------------------------------
const $sec3_next = document.querySelector(".sec2_1 > .next");
function Sec3ToSec4() {
  now = 3;
  if ($sec3_desc.classList.contains("on")) {
    $projectWrap.classList.remove("on");
    $sec3_desc.classList.remove("on");
    $project.classList.remove("on");
    $gnb.classList.remove("off");
    $H1.classList.remove("off");
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
// sec3에서 sec4 이동 END --------------------------------------------

// sec4에서 sec3 이동 --------------------------------------------
const $sec4_prev = document.querySelector(".sec4 > .prev");
function Sec4ToSec3() {
  now = 2;
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
// sec4에서 sec3 이동 END --------------------------------------------

// sec 이동 버튼 -------------------------------------------------
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
// sec 이동 버튼 END -------------------------------------------------

// sec1 타이핑 텍스트
const $typingText = document.querySelector(".typing_text");

const letters = ["Hello, World!"];

const typingSpeed = 60;
let i = 0;

// sec1 타이핑 효과
const typing = async function () {
  const letter = letters[i].split("");

  while (letter.length) {
    await wait(typingSpeed);
    $typingText.innerHTML += letter.shift();
  }
  await wait(1500);

  remove();
};

// sec1 타이핑 지우는 효과
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

// 현재 리스트 확인용 변수
let pgIdx = 0;

// prev & Next 버튼 함수
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

  // Next 버튼 클릭 시 pagenation도 함께 이동
  $pg.forEach(function (item) {
    item.classList.remove("on");
  });

  if (pgIdx < 2) {
    pgIdx = pgIdx + 1;
  } else {
    pgIdx = 0;
  }

  $pg[pgIdx].classList.add("on");
}

function prevSl() {
  firstList = $ProjectCon.firstElementChild;
  lastList = $ProjectCon.lastElementChild;
  $ProjectCon.insertBefore(lastList, firstList);
  $ProjectCon.style.cssText = `margin-left: -100%;`;
  setTimeout(() => {
    $ProjectCon.style.cssText = `margin-left = 0; transition: 0.5s`;
  }, 0);

  $pg.forEach(function (item3) {
    item3.classList.remove("on");
  });

  if (pgIdx > 0) {
    pgIdx = pgIdx - 1;
  } else {
    pgIdx = 2;
  }

  $pg[pgIdx].classList.add("on");
}

// pagenation 클릭시 그 페이지의 pagenation을 active
function pgActive(pgNum) {
  $pg.forEach(function (k) {
    k.classList.remove("on");
  });
  $pg[pgNum].classList.add("on");
}

// pagenation 클릭 시 해당 페이지로 이동 동작
$pg.forEach(function (n, nIdx) {
  n.addEventListener("click", function () {
    pgSlide(nIdx);
    pgActive(nIdx);
    pgIdx = nIdx;
  });
});

// pagenation 클릭 시 해당 페이지로 스와이프 시키는 함수
function pgSlide(number) {
  if ($pg[0].classList.contains("on")) {
    if (number == 1) {
      $ProjectCon.style.cssText = `margin-left: -100%; transition: 0.5s`;
      setTimeout(() => {
        $ProjectCon.insertBefore(firstList, null);
        $ProjectCon.style.cssText = `margin-left = 0`;
      }, 500);
      firstList = $ProjectCon.firstElementChild;
      lastList = $ProjectCon.lastElementChild;
    } else if (number == 2) {
      firstList = $ProjectCon.firstElementChild;
      lastList = $ProjectCon.lastElementChild;
      $ProjectCon.insertBefore(lastList, firstList);
      $ProjectCon.style.cssText = `margin-left: -100%;`;
      setTimeout(() => {
        $ProjectCon.style.cssText = `margin-left = 0; transition: 0.5s`;
      }, 0);
    }
  } else if ($pg[1].classList.contains("on")) {
    if (number == 0) {
      firstList = $ProjectCon.firstElementChild;
      lastList = $ProjectCon.lastElementChild;
      $ProjectCon.insertBefore(lastList, firstList);
      $ProjectCon.style.cssText = `margin-left: -100%;`;
      setTimeout(() => {
        $ProjectCon.style.cssText = `margin-left = 0; transition: 0.5s`;
      }, 0);
    } else if (number == 2) {
      $ProjectCon.style.cssText = `margin-left: -100%; transition: 0.5s`;
      setTimeout(() => {
        $ProjectCon.insertBefore(firstList, null);
        $ProjectCon.style.cssText = `margin-left = 0`;
      }, 500);
      firstList = $ProjectCon.firstElementChild;
      lastList = $ProjectCon.lastElementChild;
    }
  } else if ($pg[2].classList.contains("on")) {
    if (number == 0) {
      $ProjectCon.style.cssText = `margin-left: -100%; transition: 0.5s`;
      setTimeout(() => {
        $ProjectCon.insertBefore(firstList, null);
        $ProjectCon.style.cssText = `margin-left = 0`;
      }, 500);
      firstList = $ProjectCon.firstElementChild;
      lastList = $ProjectCon.lastElementChild;
    } else if (number == 1) {
      firstList = $ProjectCon.firstElementChild;
      lastList = $ProjectCon.lastElementChild;
      $ProjectCon.insertBefore(lastList, firstList);
      $ProjectCon.style.cssText = `margin-left: -100%;`;
      setTimeout(() => {
        $ProjectCon.style.cssText = `margin-left = 0; transition: 0.5s`;
      }, 0);
    }
  }
}

// 반응형, max-height 800일때 프로필 아코디언 메뉴
const $skill = document.querySelectorAll(".sec2 .skill > li");
const $tools = document.querySelectorAll(".sec2 .skill > li > div");

function ToggleA() {
  const skillText = this.parentNode;
  $skill.forEach((s) => {
    if (skillText == s) {
      skillText.classList.toggle("on");
      return;
    }
    s.classList.remove("on");
  });
}

$tools.forEach(function (t) {
  t.addEventListener("click", ToggleA);
});

// sec1 bug 이스터에그
const $bug = document.querySelectorAll(".bug");
const $errorCon = document.querySelector(".sec1 .error_con");
const $error = document.querySelectorAll(".error");
let ei = 0;

$bug[0].addEventListener("click", function () {
  $errorCon.style.display = "block";
  let interval = setInterval(function () {
    if (ei < 11) {
      $error[ei].classList.add("on");
      ei++;
    } else {
      clearInterval(interval);
    }
  }, 150);
  setTimeout(() => {
    let interval2 = setInterval(function () {
      if (ei > 0) {
        $error[ei - 1].classList.remove("on");
        ei--;
      } else {
        clearInterval(interval2);
      }
    }, 100);
  }, 2800);
  setTimeout(() => {
    $errorCon.style.display = "none";
  }, 5100);
});

// sec4 bug bubble 애니메이션
const $bubble = document.querySelectorAll(".bubble");
const $bubbleCon = document.querySelector(".bubble_con");
const $contact = document.querySelector(".sec4 h2");
let bi = 0;
let bc = 0;

$contact.addEventListener("click", function () {
  $bug[2].classList.toggle("on");
  if (bc == 0) {
    let interval5 = setInterval(function () {
      console.log("반복시작");
      if (bi < 8) {
        $bubble[bi].classList.add("on");
        bi++;
        console.log(bi);
      } else {
        bc = 1;
        clearInterval(interval5);
      }
    }, 250);
  } else {
    $bubble.forEach(function (x) {
      x.classList.remove("on");
      bi = 0;
      bc = 0;
    });
  }
});
