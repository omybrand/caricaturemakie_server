// 회사 메인 페이지
exports.mainForm = function (req, res) {
	try {
		res.render('index', { title: '메인' });
	} catch (e) {
		console.error("error : ", e);
	}
};