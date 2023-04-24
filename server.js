const express = require('express');
const path = require('path');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.listen(80);
console.log('Connected!');

// page routes
app.get('/', (req, res) => res.render('index'));

// page not found
app.use((req, res) => res.status(404).render('404'));
