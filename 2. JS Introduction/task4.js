/**
 * * author : Muhammad Chirzul Maula
 * * deskripsi program : Implementasi spread operator dan destructuring
 */

let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

data = {
  ...data,
  name: "Muhammad Chirzul Maula",
  email: "chirzul@protonmail.com",
  hobby: ["Karaoke", "Jogging", "Baca Webtoon", "Main Game"],
};

const { street, city } = data.address;

console.log(data);
console.log(`street: ${street}
city: ${city}`);
