const express = require('express');
const router = express.Router();
const api = require('./api');

router.get('/gsNews/:page', (req, res, next) => {
  api.gsNews(req, res, next);
});

router.get('/vgNews/:page', (req, res, next) => {
  api.vgNews(req, res, next);
});

module.exports = router;
