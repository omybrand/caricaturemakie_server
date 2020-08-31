var express = require('express');
var styleController = require('../controllers/style');
var style = express.Router();

style.get('/', styleController.styleForm); // 스타일 정보 보기

module.exports = style;
