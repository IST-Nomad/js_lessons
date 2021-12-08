function mult() {
  let s = 1;
  if (arguments.length === 0) return 0;
  for (let i = 0; i < arguments.length; i++) s *= arguments[i];
  return s;
}

function reverseString(str) {
  return String(str).split("").reverse().join("");
}

function getCodeStringFromText(str) {
  let b = "";
  str = String(str);
  for (let i = 0; i < str.length; i++) {
    let a = str.charCodeAt(i);
    b += a + " ";
  }
  return b.trim();
}

console.log(getCodeStringFromText(null));

function guessingNumber(num) {
  if (num > 0 || num < 10) {
    let a = Math.round(Math.random() * 10) + 1;
    if (num == a) {
      return "Вы выиграли";
    } else {
      return `Вы не угадали ваше число ${num} а выпало число ${a}`;
    }
  } else "Неверное число";
}
