const { Schema, model } = require('mongoose');
const slugs = require('slugs');

const ProductSchema = new Schema({
    name: {
        type: String,
        required: 'Please provide a product name',
        trim: true
    },
    slug: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true
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
    },
    color: {
        type: String,
        required: 'Please provide a product color'
    }
});

ProductSchema.pre('save', async function(next) {
    const product = this;

    if (!product.isModified('name'))  return next();
    
    this.slug = slugs(this.name);

    const slugRegExp = new RegExp(`^(${this.slug})((-[0-9]*?$))$`, 'i');

    const productsWithSlug = await this.constructor.find({ slug: slugRegExp });

    if (productsWithSlug.length) {
        this.slug = `${this.slug}-${productsWithSlug.length + 1}`;
    }
    
    next();
});

module.exports = model('Product', ProductSchema);