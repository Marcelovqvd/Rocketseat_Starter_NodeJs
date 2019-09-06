const express = require('express');

const mongoose = require('./node_modules/mongoose');
//iniciando o app
const app = express();
app.use(express.json());


//iniciando/conectando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
require('./src/models/Product');


//Rotas
app.get('/teste', (req, res) => {
  return res.json(users);
})



app.listen(3000);