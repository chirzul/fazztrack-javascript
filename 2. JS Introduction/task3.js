/**
 * * author : Muhammad Chirzul Maula
 * * deskripsi program : Mencetak segitiga terbalik sesuai dengan nilai printSegitiga
 */

const printSegitiga = 5;

if (typeof printSegitiga == "number" && printSegitiga > 0) {
  for (let i = printSegitiga; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = `${row} ${j}`;
    }
    console.log(row);
  }
} else {
  console.log("Data harus number lebih dari 0");
}
