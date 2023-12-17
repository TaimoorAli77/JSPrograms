const fs = require('fs')
const path = require('path')
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json')
module.exports = class Cart {
    static addProduct(id, productPrice) {
        //fetch the previous cart

        let cart = { products: [], totalPrice: 0 }
        fs.readFile(p, (err, fileContent) => {
            if (!err) {
                cart = JSON.parse(fileContent)
            }

            //Analyze the cart / find the existing cart
            const existingProductIndex = cart.products.findIndex(products => products.id == id)
            const existingProduct = cart.products[existingProductIndex]
            //Add new cart / add quantity in the exiting cart
            let updatedProduct;
            if (existingProduct) {
                let updatedProduct = { ...existingProduct }
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products]
                cart.products[existingProductIndex] = updatedProduct;
            }
            else {
                updatedProduct = { id: id, qty: 1 };
                cart.products = [...cart.products, updatedProduct]
            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err)
            })

        })


    }
}