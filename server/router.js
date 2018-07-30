const express = require('express');
const router = express.Router();
const api = require('./api');

router.get('/gsNews', (req, res, next) => {
  api.gsNews(req, res, next);
});

router.get('/vgNews', (req, res, next) => {
  api.vgNews(req, res, next);
});

module.exports = router;