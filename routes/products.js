const express = require('express');

const router = express.Router();

router.get('/products', (request, reponse) => {
	res.send('View product list');
});

router.get('/products/:id', (request, reponse) => {
	res.send('View product id:' + request.params.id);
});

module.exports = router;
