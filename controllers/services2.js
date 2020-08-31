// 캐릭터 마키 소개 페이지
exports.services2Form = function (req, res) {
	try {
		res.render('services2', { title: '캐릭터 마키 서비스 소개' });
	} catch (e) {
		console.error("error : ", e);
	}
};