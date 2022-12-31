class CartList  {
	constructor() {
        this.productList ={
        	product: [],
        	totalRice: 0
        };
    }
	addToCart(id, productPrice) {
		let product = this.productList.product;
		let hasProduct = false;
		for(let i = 0; i< product.length; i++) {
			if(product[i].id == id) {
				this.productList.product[i].qty++;
				this.productList.totalRice += productPrice;
				hasProduct = true;
			}
		}

		if(hasProduct == false) {
			let obj = {
				id: id,
				qty: 1
			}
			this.productList.product.push(obj);

		}
		
	}
};

module.exports = CartList;