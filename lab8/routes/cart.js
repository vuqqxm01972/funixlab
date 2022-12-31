const path = require('path');

const express = require('express');

const cartController = require('../controllers/cart');

const router = express.Router();

router.post('/cart/addtocart', cartController.addToCart);
/*
router.post('/cart/addtocart', (req, res) => {
	let body = req.body;
	console.log(body);
	res.send(200);
	}); */



module.exports = router;
