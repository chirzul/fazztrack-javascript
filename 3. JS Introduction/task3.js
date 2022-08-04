/**
 * * author : Muhammad Chirzul Maula
 * * deskripsi program : Mencari data nilai diantara nilaiAwal dan nilaiAkhir
 */

const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  if (
    typeof nilaiAwal == "number" &&
    typeof nilaiAkhir == "number" &&
    Array.isArray(dataArray)
  ) {
    if (nilaiAwal > nilaiAkhir && dataArray.length <= 5) {
      console.log(
        "nilaiAkhir harus lebih besar dari nilaiAwal dan jumlah angka dalam dataArray harus lebih dari 5"
      );
    } else if (nilaiAwal > nilaiAkhir) {
      console.log("nilaiAkhir harus lebih besar dari nilaiAwal");
    } else if (dataArray.length <= 5) {
      console.log("Jumlah angka dalam dataArray harus lebih dari 5");
    } else {
      const result = [];
      for (let i = 0; i <= dataArray.length - 1; i++) {
        if (dataArray[i] >= nilaiAwal && dataArray[i] <= nilaiAkhir) {
          result.push(dataArray[i]);
        }
      }
      if (result.length > 0) {
        result.sort((a, b) => a - b);
        console.log(result);
      } else {
        console.log("Nilai tidak ditemukan");
      }
    }
  } else {
    console.log("Masukkan tipe data yang sesuai");
  }
};

seleksiNilai(5, 20, [2, 8, 25, 4, 14, 17, 30]);
