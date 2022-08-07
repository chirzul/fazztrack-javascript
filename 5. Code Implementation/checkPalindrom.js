/**
 * * author : Muhammad Chirzul Maula
 * * deskripsi program : Deteksi kata palindrom atau bukan palindrom
 */

const checkPalindrom = (word) => {
  if (typeof word === "string") {
    word.toLowerCase() === word.toLowerCase().split("").reverse().join("")
      ? console.log(`${word} merupakan palindrom`)
      : console.log(`${word} bukan merupakan palindrom`);
  } else {
    console.log("Masukkan tipe data string!");
  }
};

export default checkPalindrom;
