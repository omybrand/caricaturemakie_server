var express = require('express');
var servicesController = require('../controllers/services');
var services = express.Router();

services.get('/', servicesController.servicesForm); // 캐리커쳐 마키 서비스 소개

module.exports = services;
