/**
 * Soal 1
 * Cara membuat conditional sederhana dengan (if..else) yaitu:
 * if(kondisi){
 *   //fungsi yang dijalankan jika kondisi bernilai benar
 * } else {
 *   //fungsi yang dijalankan jika kondisi bernilai salah
 * }
 */

// Soal 2
const cekParameter = (x) => {
  if (x) {
    return `Ini parameternya ${x}`;
  } else {
    return "Tidak ada parameter yang diberikan !";
  }
};

console.log(cekParameter("parampaa"));
console.log(cekParameter());
