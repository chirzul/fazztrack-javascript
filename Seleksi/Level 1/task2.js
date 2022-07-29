// Soal 1
const nama = "Muhammad Chirzul Maula";
let umur = 25;
let alamat = "Purwogondo, RT 17 RW 03, Kec. Kalinyamatan, Kab. Jepara";
const hobi = ["Jogging", "Karaoke", "Travelling"];
const asalSekolah = "Universitas Diponegoro";
const jurusan = "Ilmu Komputer / Informatika";
const alasanSukaProgramming =
  "Karena bidang IT akan terus berkembang dan juga sesuai dengan jurusan kuliah dan passion saya";

// Soal 2
console.log(
  `Nama saya adalah ${nama}, asal sekolah ${asalSekolah} jurusan ${jurusan}. Alasan saya tertarik dengan programming adalah ${alasanSukaProgramming}.`
);

// Soal 3
console.log(
  "Perbedaan var, let, dan const adalah:\ndata pada var dan let bisa berubah, sedangkan pada const tidak. Lalu perbedaan var dengan let dan const yaitu scope datanya. let dan const hanya bisa digunakan pada block dimana variabel tersebut didefinisikan. Sedangkan var masih bisa diakses diluar block nya, misal diluar percabangan atau perulangan. Karenanya var tidak lagi direkomendasikan karena dapat menyebabkan ambiguitas data."
);
