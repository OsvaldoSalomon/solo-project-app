const express = require('express');
const csurf = require('csurf');
const apiRouter = require('./api');
const router = express.Router();
const csrfProtection = csurf({ cookie: true });

router.use('/api', apiRouter);

router.get('/hello/world', csrfProtection, function (req, res) {
	res.cookie('XSRF-TOKEN', req.csrfToken());
	res.send('Hello World!');
});

module.exports = router;
