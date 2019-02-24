const { Schema, model } = require('mongoose');
const os = require('os');

const ProductSchema = new Schema({
    name: {
        type: String,
        required: 'Please provide a product name',
        trim: true
    },
    description: {
        type: String,
        required: 'Please provide a product description'
    },
    price: {
        type: Schema.Types.Decimal128,
        required: 'Please provide the product price',
    },
    category: {
        type: String,
        required: 'Please provide a product category'
    },
    image: {
        type: String,
        required: 'Please provide a product image',
        get: getImage,
    },
    color: {
        type: String,
        required: 'Please provide a product color'
    }
});

function getImage(image) {
    const { HOST, PORT} = process.env;
    return `http://${HOST}:${PORT}/${image}`;
}

ProductSchema.set('toJSON', { getters: true });

module.exports = model('Product', ProductSchema);