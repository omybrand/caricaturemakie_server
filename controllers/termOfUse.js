// 회사 소개 페이지
exports.termOfUse = function (req, res) {
	try {
		res.render('termOfUse', { title: '회사 소개' });
	} catch (e) {
		console.error("error : ", e);
	}
};