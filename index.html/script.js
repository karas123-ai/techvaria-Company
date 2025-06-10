function openGame(url) {
  document.getElementById("gameFrame").src = url;
  document.getElementById("popup").style.display = "block";
}

function closeGame() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("gameFrame").src = "";
}
