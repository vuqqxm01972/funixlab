const path = require('path');

const express = require('express');

const cartController = require('../controllers/cart');

const router = express.Router();

router.get('/cart', cartController.getCart);
router.post('/cart/addtocart', cartController.addToCart);
router.get('/cart/delete-product', cartController.deleteProduct);

/*
router.post('/cart/addtocart', (req, res) => {
	let body = req.body;
	console.log(body);
	res.send(200);
	}); */



module.exports = router;
