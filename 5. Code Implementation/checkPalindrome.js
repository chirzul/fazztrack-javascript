// * Check whether the word is palindrome or not.
// *
// * Created by Muhammad Chirzul Maula on August 5 2022.
// * Copyright © 2022 Fazztrack. All rights reserved.

const checkPalindrome = (word) => {
  if (typeof word === "string") {
    if (
      word.toLowerCase() === word.toLowerCase().split("").reverse().join("")
    ) {
      console.log(`${word} merupakan palindrom`);
    } else {
      console.log(`${word} bukan merupakan palindrom`);
    }
  } else {
    console.log("Masukkan tipe data string!");
  }
};

export default checkPalindrome;
