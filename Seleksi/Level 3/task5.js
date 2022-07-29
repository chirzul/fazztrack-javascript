/**
 * Soal 1
 * Perulangan atau looping yaitu kondisi dimana suatu fungsi akan dijalankan terus menerus selama nilai kondisi dalam perulangan tersebut bernilai true
 */

// contoh perulangan for
for (let i = 1; i <= 3; i++) {
  console.log(`Perulangan ke-${i}`);
}

// contoh perulangan for in
const people = {
  nama: "Muhammad Chirzul Maula",
  alamat: "Jepara",
};
for (let property in people) {
  console.log(`${property}: ${people[property]}`);
}

// contoh perulangan for of
const members = ["Zuhdil", "Ismeth", "Momo", "Andi"];
for (member of members) {
  console.log(member);
}

// contoh perulangan while
let counter = 1;
while (counter <= 5) {
  console.log(`counter ke-${counter}`);
  counter++;
}

// contah perulangan do while
do {
  console.log(`counter ke-${counter}`); // tetap dijalankan minimal 1 kali walaupun kondisi di block while bernilai false
} while (counter <= 3); // kondisi bernilai false karena counter = 6

// Soal 2
const printNumber = (num) => {
  if (typeof num == "number") {
    for (let i = 0; i <= num; i++) {
      console.log(i);
    }
  } else {
    console.log("Masukkan angka!");
  }
};
printNumber("halo");
printNumber(3);

// Soal 3
const fazztrack = (num) => {
  if (typeof num == "number") {
    for (let i = 1; i <= num; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        console.log("fazztrack");
      } else if (i % 3 == 0) {
        console.log("fazz");
      } else if (i % 5 == 0) {
        console.log("track");
      } else {
        console.log(i);
      }
    }
  } else {
    console.log("Masukkan angka!");
  }
};
fazztrack("hola");
fazztrack(15);
