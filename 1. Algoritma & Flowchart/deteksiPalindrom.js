/**
 * * author : Muhammad Chirzul Maula
 * * deskripsi program : Deteksi kata palindrom atau bukan palindrom
 */

const kata = "malam";
let cek = "";

for (let i = kata.length - 1; i >= 0; i--) {
  cek += kata[i];
}
if (cek == kata) {
  console.log("palindrom");
} else {
  console.log("bukan palindrom");
}
