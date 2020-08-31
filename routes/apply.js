var express = require('express');
var applyController = require('../controllers/apply');
var apply = express.Router();

apply.get('/', applyController.applyForm); // 인재 채용 보기
apply.get('/login', applyController.loginForm); // 인재 채용 보기
apply.get('/signup', applyController.signupForm); // 인재 채용 보기



module.exports = apply;
