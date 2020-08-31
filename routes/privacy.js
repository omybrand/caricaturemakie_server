var express = require('express');
var privacyController = require('../controllers/privacy');
var privacy = express.Router();

privacy.get('/', privacyController.privacy); // 회사 소개 보기

module.exports = privacy;
