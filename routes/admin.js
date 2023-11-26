const express = require('express')
const router = express.Router();
const path = require('path')
const rootDir = require('../util/path');
const exp = require('constants');
const products = [];
router.get('/add-product', (req, res, next) => {
    res.render('add-product', {
        docTitle: "Add Product",
        path: "/admin/add-product",
        activeAddProduct: true,
        formsCSS:true,
        productCSS: true
    })
})

router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title })
    console.log(req.body)
    res.redirect('/')
})



exports.routes = router;
exports.products = products;