const express = require('express');
const app = express();

const path = require('path');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes)

app.listen(PORT, () => console.log(`now listening on ${PORT}`));