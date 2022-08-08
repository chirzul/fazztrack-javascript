// * Divide and sort numbers based on "0" separator.
// *
// * Created by Muhammad Chirzul Maula on August 5 2022.
// * Copyright © 2022 Fazztrack. All rights reserved.

const divideAndSort = (num) => {
  if (typeof num === "number") {
    let temp = num.toString().split("0");
    for (let i = 0; i <= temp.length - 1; i++) {
      temp[i] = temp[i].split("").sort().join("");
    }
    const result = parseInt(temp.join(""));
    console.log(result);
  } else {
    console.log("Masukkan tipe data number!");
  }
};

export default divideAndSort;
