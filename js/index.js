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
