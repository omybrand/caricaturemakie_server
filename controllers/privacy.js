// 회사 소개 페이지
exports.privacy = function (req, res) {
	try {
		res.render('privacy', { title: '회사 소개' });
	} catch (e) {
		console.error("error : ", e);
	}
};