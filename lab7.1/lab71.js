const express = require("express");
const Product = require("./models/products");
var bodyParser = require('body-parser');

const app = express();

app.set("view engine", "ejs");

// serve static files from the `public` folder
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let productObj = new Product();


app.get("/", (req, res) => {
  let product = productObj.getProductList();
  console.log(product);
  res.render("index", {
    title: "Homepage",
    products: product
  });
});

app.post("/", (req, res) => {
  let body = req.body;
  productObj.addProduct(body.product_id, body.product_name, body.description, body.img_src);
//console.log(req);
  let product = productObj.getProductList();
  res.render("index", {
    title: "Homepage",
    products: product
  });
});

app.get("/product", (req, res) => {
  let product = productObj.getProductList();
  const item = product.find(p => p.id === req.query.id);
  res.render("product", {
    title: `About ${item.product_name} ${item.product_description}`,
    product
  });
});

const server = app.listen(3000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});