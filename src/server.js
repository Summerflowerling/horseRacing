const port = 8089;
const baseUrl = 'http://api.exchangeratesapi.io/v1/latest?access_key=';

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
require('dotenv').config();

app.use(cors());

app.get('/exchangeRate', (req, res) => {
  axios
    .get(baseUrl)
    .then(function (response) {
      // handle success
      res.send(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
  console.log(process.env.REACT_APP_EXCHANGERATES_API_KEYS);
});
