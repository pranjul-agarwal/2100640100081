const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id: { type: String, required: true, unique: true },
    companyId: { type: String, required: true },
    categoryId: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number },
    discount: { type: Number },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);