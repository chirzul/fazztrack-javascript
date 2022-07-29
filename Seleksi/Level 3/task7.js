// Soal 1
const isNumber = (num) => (typeof num == "number" ? true : false);
const ganjil = (num) => {
  if (isNumber(num)) {
    return num % 2 == 1;
  } else {
    return "Masukkan angka !";
  }
};
console.log(ganjil("a"));
console.log(ganjil(3));
console.log(ganjil(6));

const genap = (num) => {
  if (isNumber(num)) {
    return num % 2 == 0;
  } else {
    return "Masukkan angka !";
  }
};
console.log(genap(true));
console.log(genap(3));
console.log(genap(6));

// Soal 2
const printSegitiga = (num) => {
  if (isNumber(num)) {
    let result = "";
    for (let i = num; i > 0; i--) {
      for (let j = i; j > 0; j--) {
        result += `${i} `;
      }
      result += "\n";
    }
    console.log(result);
  } else {
    console.log("Masukkan angka !");
  }
};
printSegitiga("a");
printSegitiga(5);

const printSegitigaBaru = (num) => {
  if (isNumber(num)) {
    let result = "";
    for (let i = 1; i <= num; i++) {
      for (let j = 1; j <= i; j++) {
        result += `${i} `;
      }
      result += "\n";
    }
    console.log(result);
  } else {
    console.log("tidak valid");
  }
};
printSegitigaBaru(5);
