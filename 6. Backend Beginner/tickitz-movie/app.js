const express = require('express');
const main = require('./src/main');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(main);

app.listen(port, () => {
  console.log(`Tickitz Movie App listening on port ${port}`);
});
