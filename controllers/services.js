var services = require('../models/services');

// 캐리커쳐 마키 소개 페이지
exports.servicesForm = function (req, res) {
	try {
		// 스타일 개수
		services.getstylecount(function (err, cnt) {
			if (err) console.error(err);
			if (cnt != undefined) {
				// 스타일 리스트 받기
				services.getstylelist(function (err, results) {
					if (err) console.error(err);
					res.render('services', { title: '캐리커쳐 마키 서비스 소개', cnt: cnt, datas: results });
				});
			}
		});
	} catch (e) {
		console.error("error : ", e);
	}
};