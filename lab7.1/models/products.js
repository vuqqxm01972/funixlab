class Products  {
	constructor() {
        this.productList = [];
    }

    addProduct(id, product_name,description , imageSrc) {
        let obj = {
            id: id,
            product_name: product_name,
            description: description,
            imgSrc: imageSrc
        }

        this.productList.push(obj);
    }

    getProductByID(id) {
        let result = this.productList.find(obj => {
          return obj.id === id
        });

        return result;
    }

    getProductList() {
        return this.productList;
    }

}

module.exports = Products;