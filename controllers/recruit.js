// 회사 소개 페이지
exports.recruitForm = function (req, res) {
	try {
		res.render('recruit', { title: '회사 구인' });
	} catch (e) {
		console.error("error : ", e);
	}
};