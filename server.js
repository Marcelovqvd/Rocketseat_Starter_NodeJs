const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir")

//iniciando app
const app = express();
app.use(express.json());
app.use(cors());

//iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
requireDir('./src/models/Product');

const Product = mongoose.model('Product');
//primeira rota
app.use("/api", require("./src/routes"));

app.get("/", (req, res) => {
  Product.create({
    title: 'React Native',
    description: 'Build native apps with React',
    url: 'http://github.com/facebook/react-native'
  });

  return res.send("Hello");
})

app.listen(3001);