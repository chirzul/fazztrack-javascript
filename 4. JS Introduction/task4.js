/**
 * * author : Muhammad Chirzul Maula
 * * deskripsi program : Mengambil data dari link yang ditentukan
 */

import fetch from "node-fetch";

const getName = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      users.forEach((user) => {
        console.log(user.name);
      });
    });
};

getName();
