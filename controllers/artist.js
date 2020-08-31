var artist = require('../models/artist');

// 작가 소개 페이지
exports.artistForm = function (req, res) {
	try {
		// 유효성 검사
		if (req.query.sn == undefined) {
			res.send('<script>alert("존재하지 않는 경로입니다.");location.replace("/services");</script>');
			return;
		}

		var sn = req.query.sn;
		// 작가 정보 받기
		artist.getartistinfo(sn, function (err, info) {
			if (err) console.error(err);
			// 작가 약력 받기
			artist.getartisthistory(sn, function (err, results) {
				if (err) console.error(err);
				// 작가 스타일 리스트 받기
				artist.getstylelist(sn, function (err, results2) {
					if (err) console.error(err);
					if (info[0] == undefined) {
						res.send('<script>alert("존재하지 않는 작가입니다.");location.replace("/services");</script>');
					} else {
						res.render('artist', { title: '작가 소개', info: info[0], datas: results, datas2: results2 });
					}
				});
			});
		});
	} catch (e) {
		console.error("error : ", e);
	}
};