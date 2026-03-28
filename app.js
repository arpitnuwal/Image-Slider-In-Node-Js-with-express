const express = require('express');
const app = express();
const port = 3000;

// Set EJS as view engine
app.set('view engine', 'ejs');

// Array of online image URLs
const images = [
  'https://picsum.photos/id/1011/800/400',
  'https://picsum.photos/id/1021/800/400',
  'https://picsum.photos/id/1031/800/400',
  'https://picsum.photos/id/1041/800/400'
];

// Route
app.get('/', (req, res) => {
  res.render('index', { images });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});