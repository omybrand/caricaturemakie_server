var express = require('express');
var indexController = require('../controllers/index');
var index = express.Router();

index.get('/', indexController.mainForm); // 메인 페이지

module.exports = index;
