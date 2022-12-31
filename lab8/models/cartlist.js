class CartList  {
	constructor() {
        this.productList ={
        	product: [],
        	totalPrice: 0
        };
    }
	addToCart(id, name, productPrice) {
		let product = this.productList.product;
		let hasProduct = false;
		for(let i = 0; i< product.length; i++) {
			if(product[i].id == id) {
				this.productList.product[i].qty++;
				this.productList.totalPrice += productPrice;
				hasProduct = true;
			}
		}

		if(hasProduct == false) {
			let obj = {
				id: id,
				name: name,
				price: productPrice,
				qty: 1
			}
			this.productList.totalPrice += productPrice;

			this.productList.product.push(obj);

		}
		
	}

	deleteProduct(id) {
		let product = this.productList.product;
		for(let i = 0; i < product.length; i++) {
	      if(product[i].id == id) {
	      	this.productList.totalPrice = this.productList.totalPrice - product[i].price*product[i].qty;
	        this.productList.product.splice(i, 1);  
	      }
	    }

	}

	getCartList() {
		return this.productList;
	}
};

module.exports = CartList;