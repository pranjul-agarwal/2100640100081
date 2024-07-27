const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

const eCommerceCompanies = [
    { id: 'company1', apiUrl: 'https://company1.com/' },
    { id: 'company2', apiUrl: 'https://company2.com/' },
    { id: 'company3', apiUrl: 'https://company3.com/' },
    { id: 'company4', apiUrl: 'https://company4.com/' },
    { id: 'company5', apiUrl: 'https://company5.com/' }
];

router.get('/categories/:categoryName/products', async (req, res) => {
    const { categoryName } = req.params;
    const { n, page, sort } = req.query;
    const products = await getTopProducts(categoryName, n, page, sort);
    res.json(products);
});

router.get('/categories/:categoryName/products/:productId', async (req, res) => {
    const { categoryName, productId } = req.params;
    const product = await getProduct(categoryName, productId);
    res.json(product);
});

async function getTopProducts(categoryName, n, page, sort) {
    const products = [];
    for (const company of e - commerceCompanies) {
        const apiUrl = `${company.apiUrl}/categories/${categoryName}/products`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        products.push(...data.products);
    }
    products.sort((a, b) => {
        if (sort === 'rating') return b.rating - a.rating;
        if (sort === 'price') return a.price - b.price;
        if (sort === 'company') return a.companyId.localeCompare(b.companyId);
        if (sort === 'discount') return b.discount - a.discount;
        return 0;
    });
    const startIndex = (page - 1) * n;
    const endIndex = startIndex + n;
    return products.slice(startIndex, endIndex);
}

async function getProduct(categoryName, productId) {
    for (const company of eCommerceCompanies) {
        const apiUrl = `${company.apiUrl}/categories/${categoryName}/products/${productId}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.product) return data.product;
    }
    return null;
}

module.exports = router;