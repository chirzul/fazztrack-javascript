/**
 * * author : Muhammad Chirzul Maula
 * * deskripsi program : Membalikkan kata dari sebuah kalimat
 */

let teks = "Muhammad Chirzul Maula";
teks = teks.split(" ");
let hasil = "";

for (let i = teks.length - 1; i >= 0; i--) {
  hasil += `${teks[i]} `;
}

console.log(hasil);
