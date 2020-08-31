var express = require('express');
var aboutController = require('../controllers/about');
var about = express.Router();

about.get('/', aboutController.aboutForm); // 회사 소개 보기

module.exports = about;
