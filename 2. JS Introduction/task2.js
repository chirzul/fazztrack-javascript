/**
 * * author : Muhammad Chirzul Maula
 * * deskripsi program : Menghitung rata-rata nilai UN beserta grade-nya
 */

const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

let rataRata;
let grade;

if (
  typeof mtk == "number" &&
  typeof bahasaIndonesia == "number" &&
  typeof bahasaInggris == "number" &&
  typeof ipa == "number" &&
  mtk >= 0 &&
  mtk <= 100 &&
  bahasaIndonesia >= 0 &&
  bahasaIndonesia <= 100 &&
  bahasaInggris >= 0 &&
  bahasaInggris <= 100 &&
  ipa >= 0 &&
  ipa <= 100
) {
  rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
  if (rataRata >= 90) {
    grade = "A";
  } else if (rataRata >= 80) {
    grade = "B";
  } else if (rataRata >= 70) {
    grade = "C";
  } else if (rataRata >= 60) {
    grade = "D";
  } else {
    grade = "E";
  }
  console.log(`Rata-rata = ${rataRata}
Grade = ${grade}`);
} else {
  console.log("Nilai harus diisi dengan angka 0 - 100 !");
}
