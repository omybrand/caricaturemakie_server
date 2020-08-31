var express = require('express');
var services2Controller = require('../controllers/services2');
var services2 = express.Router();

services2.get('/', services2Controller.services2Form); // 캐릭터 마키 서비스 소개

module.exports = services2;
