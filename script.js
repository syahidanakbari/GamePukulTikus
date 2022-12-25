const tanah = document.querySelectorAll(".tanah");
const tikus = document.querySelectorAll(".tikus");
const papanSkor = document.querySelector(".papan-skor");

let tanahSebelumnya;
let selesai;
let score;

function randomTanah(tanah) {
  const t = Math.floor(Math.random() * tanah.length);
  const tRandom = tanah[t];

  // Jika angkanya sama maka di cancel. atau pilih angka lain.
  if (tRandom == tanahSebelumnya) {
    randomTanah(tanah);
  }
  tanahSebelumnya = tRandom;

  return tRandom;
}

function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function munculkanTikus() {
  const tRandom = randomTanah(tanah);
  const wRandom = randomWaktu(300, 1000);
  tRandom.classList.add("muncul");

  // Berapa Lama Tikus Menghilang
  setTimeout(() => {
    tRandom.classList.remove("muncul");

    if (!selesai) {
      munculkanTikus();
    }
  }, wRandom);
}

// Button Function Mulai
function mulai() {
  selesai = false;
  score = 0;
  papanSkor.textContent = 0;
  munculkanTikus();

  setTimeout(() => {
    selesai = true;
  }, 10000);
}

function pukul() {
  score++;
  papanSkor.textContent = score;
  this.parentNode.classList.remove("muncul");
}

tikus.forEach((t) => {
  t.addEventListener("click", pukul);
});
