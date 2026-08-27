const GAME = "https://hanhyong.github.io/OVERHUE/";

function openGame(hash) {
  chrome.tabs.create({ url: GAME + hash });
}

document.getElementById("daily").onclick = () => openGame("#daily");
document.getElementById("play").onclick = () => openGame("#play");
