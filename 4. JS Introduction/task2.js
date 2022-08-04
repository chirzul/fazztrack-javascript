/**
 * * author : Muhammad Chirzul Maula
 * * deskripsi program : Menampilkan nama bulan yang terdapat pada variabel month dalam fungsi getMonth
 */

const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found"), []);
    }
  }, 4000);
};

const showMonth = (error, months) => {
  if (!error) {
    months.map((month) => console.log(month));
  } else {
    console.log(error.message);
  }
};

getMonth(showMonth);
