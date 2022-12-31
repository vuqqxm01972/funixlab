//const CartList = require('../models/cart');

exports.addToCart = (req, res) => {
  let data = req.body;
  console.log(data);
  global.cartList.addToCart(data.id,data.name, data.price);
  res.status(200).send({"success" : true});;
};

exports.deleteProduct = (req, res) => {
  const prodId = req.query.id;
  global.cartList.deleteProduct(prodId);
  return res.redirect('/cart');
};

exports.getCart = (req, res, next) => {
  let cartList = global.cartList.getCartList();
  console.log(cartList);
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart',
    productList : cartList.product,
    totalPrice: cartList.totalPrice
  });
};