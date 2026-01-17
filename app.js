const picker = document.getElementById("picker");
const list = document.getElementById("list");
const audio = document.getElementById("audio");
const now = document.getElementById("now");

let songs = [];

picker.addEventListener("change", (e) => {
  songs = Array.from(e.target.files);
  list.innerHTML = "";
  songs.forEach((song, i) => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerText = "🎵 " + song.name;
    div.onclick = () => playSong(i);
    list.appendChild(div);
  });
});

function playSong(i){
  const song = songs[i];
  const url = URL.createObjectURL(song);
  audio.src = url;
  now.innerText = "Now Playing: " + song.name;
  audio.play();
}
