const fs = require('fs');
const path = require('path');
global.root_product_id = 2;
const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};



module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.product_id = global.root_product_id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;

    global.root_product_id++;
  }

  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
    
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
