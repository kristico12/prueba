const express = require('express');
const router = express.Router();

router.get('/apis/hola', (req, res) => {
    console.log('hola')
});

router.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
});

module.exports = router;