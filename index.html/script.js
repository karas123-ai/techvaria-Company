
function openGame(url) {
  document.getElementById("gameFrame").src = url;
  document.getElementById("popup").style.display = "flex";
}

function closeGame() {
  document.getElementById("gameFrame").src = "";
  document.getElementById("popup").style.display = "none";
}
