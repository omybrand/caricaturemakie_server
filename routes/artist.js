var express = require('express');
var artistController = require('../controllers/artist');
var artist = express.Router();

artist.get('/', artistController.artistForm); // 작가 정보 보기

module.exports = artist;
