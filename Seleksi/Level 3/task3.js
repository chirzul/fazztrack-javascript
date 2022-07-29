/**
 * Soal 1
 * Cara membuat function di javascript bisa dilakukan dengan kata kunci function yang diikuti dengan nama function, kemudian setelah nama function diberi tanda kurung yang berisi parameter jika ada. lalu diakhiri kurung kurawal yang berisi fungsi yang akan dijalankan.
 */
function salam(nama) {
  return console.log(`Halo ${nama}, Selamat pagi!`);
}
salam("Chirzul");

// Soal 2
// Terdapat juga metode arrow function untuk membuat suatu fungsi
const tambah = (bilanganPertama, bilanganKedua) =>
  bilanganPertama + bilanganKedua;
console.log(tambah(5, 6));
