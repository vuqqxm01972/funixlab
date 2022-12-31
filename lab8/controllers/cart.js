//const CartList = require('../models/cart');

exports.addToCart = (req, res) => {
  let data = req.body;
  console.log(data);
  global.cartList.addToCart(data.id, data.price);
  res.status(200).send({"success" : true});;
};


