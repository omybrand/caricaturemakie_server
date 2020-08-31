var express = require('express');
var termOfUseController = require('../controllers/termOfUse');
var termOfUse = express.Router();

termOfUse.get('/', termOfUseController.termOfUse); // 회사 소개 보기

module.exports = termOfUse;
