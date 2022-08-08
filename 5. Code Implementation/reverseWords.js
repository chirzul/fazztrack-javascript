// * Reverse the words from a sentence.
// *
// * Created by Muhammad Chirzul Maula on August 5 2022.
// * Copyright © 2022 Fazztrack. All rights reserved.

const reverseWords = (words) => {
  if (typeof words === "string") {
    console.log(words.split(" ").reverse().join(" "));
  } else {
    console.log("Masukkan string!");
  }
};

export default reverseWords;
