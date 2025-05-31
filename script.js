const blurToggleBtn = document.getElementById("blurToggleBtn");
const gameCard = document.getElementById("gameCard");

blurToggleBtn.addEventListener("click", () => {
  gameCard.classList.toggle("blur");
});
