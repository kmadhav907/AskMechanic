const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/home.html');
});
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html');
});
app.listen(port, () => {
  console.log('Everything is running fine :)');
});
