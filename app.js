const express = require('express');
const app = express()

app.get('/', (req, res) => res.send('Olá'));
app.listen(3000, () => console.log('Servidor online'));

