// 회사 소개 페이지
exports.aboutForm = function (req, res) {
	try {
		res.render('about', { title: '회사 소개' });
	} catch (e) {
		console.error("error : ", e);
	}
};