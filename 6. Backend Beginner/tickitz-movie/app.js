const express = require('express');
const main = require('./src/main');
const app = express();
const port = 3000;
const db = require('./src/config/db');

const init = async () => {
  try {
    await db.connect();
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(main);

    app.listen(port, () => {
      console.log(`Tickitz Movie App listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

init();
