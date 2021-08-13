const secretNumb = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumb;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "🤔 No Number !";
  } else if (guess === secretNumb) {
    document.querySelector(".message").textContent = "😄 Correct Number!";
  }
});
