var express = require('express');
var recruitController = require('../controllers/recruit');
var recruit = express.Router();

recruit.get('/', recruitController.recruitForm); // 인재 채용 보기

module.exports = recruit;
