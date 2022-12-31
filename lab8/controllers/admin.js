const Product = require('../models/product');
const fs = require('fs');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {
  const prodId = req.query.id;

  Product.fetchAll(productList => {
    console.log(productList);

    product = productList.find(p => p.product_id == prodId);

    if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        product: product
      });
  });

}

exports.postEditProduct = (req, res, next) => {
  const prod = req.body;
  let boolHasProduct = false;

  Product.fetchAll(productList => {
    console.log(productList);

    for(let i = 0; i < productList.length; i++) {
      if(productList[i].product_id == prod.product_id) {
        productList[i].title = prod.title;
        productList[i].imageUrl = prod.imageUrl;
        productList[i].description = prod.description;
        productList[i].price = prod.price;

        fs.writeFileSync('./data/products.json', JSON.stringify(productList, null, 2) , 'utf-8');
        boolHasProduct = true;
        return res.redirect('/admin/products');
      }
    }

    if(boolHasProduct == false) {
      return res.redirect('/');
    }

/*
    product = productList.find(p => p.product_id == prodId);

    if (!product) {
        return res.redirect('/');
      }




      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        product: product
      });
      */
  });

}


exports.getDeleteProduct = (req, res, next) => {
  const prodId = req.query.id;

  Product.fetchAll(productList => {
    for(let i = 0; i < productList.length; i++) {
      if(productList[i].product_id == prodId) {
         productList.splice(i, 1);
         fs.writeFileSync('./data/products.json', JSON.stringify(productList, null, 2) , 'utf-8');
         return res.redirect('/admin/products');
      }
    }

    return res.redirect('/admin/products');
  });

}

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};
