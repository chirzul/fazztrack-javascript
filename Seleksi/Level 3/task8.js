// Soal 1
const isNumber = (num) => (typeof num == "number" ? true : false);

const gradeCheck = (nilai) => {
  if (isNumber(nilai)) {
    if (nilai >= 0 && nilai <= 100) {
      if (nilai >= 65) return "Lulus";
      else return "Tidak Lulus";
    } else {
      return "Masukkan rentang nilai 0 - 100!";
    }
  } else {
    return "Masukkan nilai berupa angka!";
  }
};
console.log(gradeCheck("dor"));
console.log(gradeCheck(101));
console.log(gradeCheck(65));
console.log(gradeCheck(64));

// Soal 2
const cekOngkir = (jarak) => {
  let ongkir = 5000;
  if (isNumber(jarak)) {
    if (jarak > 2) {
      ongkir += (jarak - 2) * 3000;
    }
    return ongkir;
  } else {
    return "Masukkan jarak berupa angka(km)!";
  }
};
console.log(cekOngkir("ongkir"));
console.log(cekOngkir(5));
console.log(cekOngkir(2));
console.log(cekOngkir(1));
