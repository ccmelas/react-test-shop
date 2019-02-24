const router = require('express').Router();
const ProductController = require('./../../controllers/ProductController');
const ErrorHandler = require('../../handlers/ErrorHandler');

const { upload } = require('./../../config/multer');

router.get('/', ErrorHandler.catchErrors(ProductController.index));
router.post('/', 
    upload.single('image'),
    ProductController.validate, 
    ErrorHandler.catchErrors(ProductController.store)
);

router.get('/:id', ErrorHandler.catchErrors(ProductController.show));

module.exports = router;
