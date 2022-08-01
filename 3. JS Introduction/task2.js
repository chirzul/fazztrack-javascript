/**
 * * author : Muhammad Chirzul Maula
 * * deskripsi program : Mencetak nama berdasarkan keyword dan dibatasi outputnya
 */

const names = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

const searchName = (keyword, limit = 1, callback = limitResult) => {
  const searchResult = [];
  if (typeof keyword == "string" && typeof limit == "number" && limit > 0) {
    names.forEach((name) => {
      if (name.toLowerCase().includes(keyword.toLowerCase())) {
        searchResult.push(name);
      }
    });
    callback(searchResult, limit);
  } else {
    console.log("Masukkan tipe data yang sesuai!");
  }
};

const limitResult = (searchResult, limit) => {
  const result = [];
  if (searchResult.length > 0) {
    for (let i = 0; i <= limit - 1; i++) {
      if (searchResult.length > i) {
        result.push(searchResult[i]);
      }
    }
    console.log(result);
  } else {
    console.log("Nama tidak ditemukan");
  }
};

searchName("el");
