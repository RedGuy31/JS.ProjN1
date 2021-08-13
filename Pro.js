const secretNumb = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  // No input!
  if (!guess) {
    document.querySelector(".message").textContent = "🤔 No Number !";
  }
  // Win !
  else if (guess === secretNumb) {
    document.querySelector(".message").textContent = "😄 Correct Number!";
    document.querySelector(".number").textContent = secretNumb;
    document.querySelector("body").style.backgroundColor = "#60b346";
    document.querySelector(".number").style.width = "30rem";
  }
  // Too Hight!
  else if (guess > secretNumb) {
    if (score > 1) {
      document.querySelector(".message").textContent = "😥 Too hight!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🥺 You lost this game";
      document.querySelector(".score").textContent = 0;
    }
    // Too Low!
  } else if (guess < secretNumb) {
    if (score > 1) {
      document.querySelector(".message").textContent = "😎 Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🥺 You lost this game";
      document.querySelector(".score").textContent = 0;
    }
  }
});
