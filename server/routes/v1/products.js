const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({ message: 'Product Index Route' });
});

module.exports = router;
