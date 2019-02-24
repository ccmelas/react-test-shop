const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, __dirname + '/../public/uploads'),
    filename: (req, file, cb) => cb(null, `${new Date().toISOString()}${file.originalname}`)
});

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