const multer = require('multer');

const storage = multer.memoryStorage();

// Upload only files with .jpg and .png extensions
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const upload = multer({ storage, fileFilter });

module.exports = { upload };