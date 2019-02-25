const Product = require('./../models/Product');

/**
 * Manages products
 */
class ProductController {
    
    /**
     * Stores a new product
     * @param {object} req
     * @param {object} res
     * @returns {*} [Response]
    */
    static async store(req, res) {
        const data = req.body;
        data.image = `/uploads/${req.file.filename}`;

        const product = await Product.create(data);
        res.json({ message: 'Product created successfully', data: product });
    }

    /**
     * Returns all products
     * @param {object} req
     * @param {object} res
     * @returns {*} [Response]
    */
    static async index(req, res) {
        const products = await Product.find({}).select('name price image');
        res.json({ data: products });
    }

    /**
     * Returns a single product
     * @param {object} req
     * @param {object} res
     * @returns { * } [Response]
    */
    static async show(req, res) {
        const product = await Product.findById(req.params.id);

        if (!product) res.status('404');
        
        res.json({ data: product });
    }

    /**
     * Validates data for product creation
     * @param {Object} req
     * @param {Object} res
     * @param {Function} next
     * @returns {*} [Response]
    */
    static async validate(req, res, next) {
        const errors = [];
        const required = ['name', 'description', 'price', 'category', 'color'];

        required.forEach(property => {
            if (!req.body[property]) errors.push(`${ property } is a required field`);
        });
        
        if (!req.file) errors.push('The image field is required');

        if (!errors.length) return next();

        return res
                .status(422)
                .json({ message: 'Validation errors', errors });
    }
};

module.exports = ProductController;