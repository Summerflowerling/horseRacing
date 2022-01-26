const port = 8099;
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hi There');
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
