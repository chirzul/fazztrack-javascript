/**
 * * author : Muhammad Chirzul Maula
 * * deskripsi program : Fungsi sortir angka berdasarkan separator angka 0
 */

const divideAndSort = (num) => {
  if (typeof num === "number") {
    let temp = num.toString().split("0");
    for (let i = 0; i <= temp.length - 1; i++) {
      temp[i] = temp[i].split("").sort().join("");
    }
    const result = parseInt(temp.join(""));
    console.log(result);
  } else {
    console.log("Masukkan tipe data number!");
  }
};

export default divideAndSort;
