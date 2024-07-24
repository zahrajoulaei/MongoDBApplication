require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { connectToDb } = require('./db');
const jewelryRoutes = require('./routes/jewelry');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/jewelry', jewelryRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the jewelry shop! the server works! go to the /jewelry to see list of all items.');
});

connectToDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to connect to the database:', err.message);
});