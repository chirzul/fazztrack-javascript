/**
 * * author : Muhammad Chirzul Maula
 * * deskripsi program : Membalikkan kata dari sebuah kalimat
 */

const reverseWords = (words) => {
  if (typeof words === "string") {
    console.log(words.split(" ").reverse().join(" "));
  } else {
    console.log("Masukkan string!");
  }
};

export default reverseWords;
