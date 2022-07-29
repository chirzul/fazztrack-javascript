// Soal 1
// Ini comment satu baris
/**
 * Tipe data di JavaScript adalah:
 * 1. String, yaitu tipe data yang berisi kumpulan kosong atau lebih karakter
 * 2. Number, yaitu tipe data angka
 * 3. Boolean, hanya bernilai "true" atau "false"
 * 4. Array, yaitu tipe data yang berisi kumpulan data
 * 5. Object, mirip dengan array namun dengan properties / attributes
 * 6. Undefined, tipe data dimana variabel didefinisikan, namun belum diberi nilai
 */

// Soal 2
// Tipe data string di JavaScript
const nama = "Muhammad Chirzul Maula";
const gender = "Laki-laki";
const stringKosong = "";
// Tipe data number di JavaScript
let umur = 24;
const nilai = 3.06;
let harga = 12500;
// Tipe data boolean di JavaScript
const lulus = nilai > 2.75;
const isMale = gender === "Laki-laki";
let isLapar = false;
// Tipe data array di JavaScript
const hobi = ["Jogging", "Karaoke", "Travelling"];
const member = ["Zuhdil", "Ismeth", "Momo", "Andi"];
const digimon = ["Agumon", "Gabumon", "Patamon"];
// Tipe data object di JavaScript
const orang = {
  nama: "Muhammad Chirzul Maula",
  alamat: "Jepara",
  umur: 24,
};
const kendaraan = {
  jenis: "Motor",
  roda: 2,
  merk: "Honda",
};
const kucing = {
  jenis: "Persian",
  warna: "Putih",
};
// Tipe data undefined di JavaScript
let jodoh = undefined;
console.log(
  `Hai, nama saya ${nama}, umur ${umur}. Saya sangat suka ${hobi[0]}`
);

// Soal 3
const angkaPertama = 2020;
const angkaKedua = 8;
let total;
// Penjumlahan
total = angkaPertama + angkaKedua;
console.log(`${angkaPertama} + ${angkaKedua} = ${total}`);
// Pengurangan
total = angkaPertama - angkaKedua;
console.log(`${angkaPertama} - ${angkaKedua} = ${total}`);
// Perkalian
total = angkaPertama * angkaKedua;
console.log(`${angkaPertama} * ${angkaKedua} = ${total}`);
// Pembagian
total = angkaPertama / angkaKedua;
console.log(`${angkaPertama} / ${angkaKedua} = ${total}`);
