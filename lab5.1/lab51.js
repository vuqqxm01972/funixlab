const express = require("express");
const product = require("./products.json");

const app = express();

app.set("view engine", "pug");

// serve static files from the `public` folder
app.use(express.static(__dirname + "/public"));


app.get("/", (req, res) => {
  res.render("index", {
    title: "Homepage",
    products: product.items
  });
});

app.get("/product", (req, res) => {
  const item = product.items.find(p => p.id === req.query.id);
  res.render("product", {
    title: `About ${item.product_name} ${item.product_description}`,
    item
  });
});

const server = app.listen(3000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});