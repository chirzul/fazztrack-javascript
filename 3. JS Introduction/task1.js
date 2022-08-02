/**
 * * author : Muhammad Chirzul Maula
 * * deskripsi tugas : Menjelaskan contoh built-in function dan implementasinya
 */

const nama = "Muhammad Chirzul Maula";
const makananFavorit = ["Rendang", "Kari ayam", "Nasi Kuning"];
const nilai = [76, 98, 80, 88, 77];

// * 1. split() : Memisahkan string menjadi array berdasarkan input yg dimasukkan.
console.log(nama.split(" "));

// * 2. join() : Menggabungkan array menjadi satu string
console.log(makananFavorit.join(", "));

// * 3. toLowerCase() : Mengubah string menjadi lowercase
console.log(nama.toLowerCase());

// * 4. toUpperCase() : Mengubah string menjadi uppercase
console.log(nama.toUpperCase());

// * 5. push() : Menambahkan elemen baru di akhir array
makananFavorit.push("Bakso");
console.log(makananFavorit);

// * 6. pop() : Menghilangkan elemen terakhir dari array dan mengembalikan nilai dari elemen tersebut
const makananTerakhir = makananFavorit.pop();
console.log(makananTerakhir);
console.log(makananFavorit);

// * 7. unshift() : Menambahkan elemen baru di awal array
makananFavorit.unshift("Gulai");
console.log(makananFavorit);

// * 8. shift() : Menghilangkan elemen pertama dari array dan mengembalikan nilai dari elemen tersebut
const makananPertama = makananFavorit.shift();
console.log(makananPertama);
console.log(makananFavorit);

// * 9. reverse() : Membalikkan urutan array dimulai dari index terakhir
console.log(makananFavorit.reverse());

// * 10. max() : Mendapatkan nilai terbesar dari array number
console.log(Math.max(...nilai));
