const express = require('express');
const router = express.Router();
const csurf = require('csurf');
const csrfProtection = csurf({ cookie: true });

router.get('/hello/world', csrfProtection, function (req, res) {
	res.cookie('XSRF-TOKEN', req.csrfToken());
	res.send('Hello World!');
});

module.exports = router;
