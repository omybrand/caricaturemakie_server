// 회사 소개 페이지
exports.applyForm = function (req, res) {
	try {
		res.render('apply', { title: '작가 구인' });
	} catch (e) {
		console.error("error : ", e);
	}
};


exports.loginForm = function (req, res) {
	try {
		res.render('apply-login', { title: '작가 로그인' });
	} catch (e) {
		console.error("error : ", e);
	}
};


exports.signupForm = function (req, res) {
	try {
		res.render('apply-signup', { title: '작가 로그인' });
	} catch (e) {
		console.error("error : ", e);
	}
};