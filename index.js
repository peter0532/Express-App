// import express
const express = require('express');
const path = require('path');

// create express app instance
const app = express();

// set static folder
app.use(express.static(path.join(__dirname, 'pages')));

// define the first route
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// define the second route
app.get('/about', function (req, res) {
  res.sendFile(__dirname + '/pages/about.html');
});

// define the third route
app.get('/contact', function (req, res) {
  res.sendFile((__dirname +  '/pages/contact.html'));
});

// define the fourth route
app.get('/service', function (req, res) {
  res.sendFile(path.join(__dirname, '/pages,/ervice.html'));
});

// start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
