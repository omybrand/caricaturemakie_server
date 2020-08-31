var style = require('../models/style');

// 회사 스타일 페이지
exports.styleForm = function (req, res) {
	try {
		// 유효성 검사
		if (req.query.sn == undefined) {
			res.send('<script>alert("존재하지 않는 경로입니다.");location.replace("/services");</script>');
			return;
		}

		var style_sn = req.query.sn;
		var artist_sn;
		var rate;
		var finishtime1;
		var finishtime2;

		// 작가 정보 얻기
		style.getartistinfo(style_sn, function (err, info) {
			if (err) console.error(err);
			if (info[0] == undefined) {
				res.send('<script>alert("존재하지 않는 작가와 스타일입니다.");location.replace("/services");</script>');
				return;
			} else {
				// 스타일 정보 얻기
				style.showstyleinfo(style_sn, function (err, result) {
					if (err) console.error(err);
					if (result[0] != undefined) {
						// 스타일 평점 얻기
						style.getstylerate(style_sn, function (err, rresult) {
							if (err) console.error(err);
							if (rresult[0] != undefined) {
								rate = rresult[0].rate;
							} else {
								rate = -1;
							}

							// 마지막 주문 날짜 얻기
							style.getfinaltime(info[0].artist_sn, function (err, gresult) {
								if (err) console.error(err);
								if (gresult[0] != undefined) {
									var temp = new Date(gresult[0].order_finishtime);
									var temp1 = new Date();
									var temp2 = new Date();
									temp1.setDate(temp.getDate() + 2);
									temp2.setDate(temp.getDate() + 4);

									var yy = temp1.getFullYear();
									var mm = temp1.getMonth() + 1;
									var dd = temp1.getDate();

									finishtime1 = yy + "." + mm + "." + dd;

									yy = temp2.getFullYear();
									mm = temp2.getMonth() + 1;
									dd = temp2.getDate();

									finishtime2 = yy + "." + mm + "." + dd;
								} else {
									var temp = new Date();
									var temp1 = new Date();
									var temp2 = new Date();
									temp1.setDate(temp.getDate() + 2);
									temp2.setDate(temp.getDate() + 4);

									var yy = temp1.getFullYear();
									var mm = temp1.getMonth() + 1;
									var dd = temp1.getDate();

									finishtime1 = yy + "." + mm + "." + dd;

									yy = temp2.getFullYear();
									mm = temp2.getMonth() + 1;
									dd = temp2.getDate();

									finishtime2 = yy + "." + mm + "." + dd;
								}

								// 스타일 포트폴리오 얻기
								style.showstyleportlist(style_sn, function (err, results) {
									if (err) console.error(err);
									// console.log(result[0]);
									res.render('style', { title: '스타일 소개', artist: info[0], data: result[0], rate: rate, finishtime1: finishtime1, finishtime2: finishtime2, datas: results });
								});
							});
						});
					} else {
						res.send('<script>alert("해당 스타일 정보가 존재하지 않습니다.");location.replace("/services");</script>');
						return;
					}
				});
			}
		});
	} catch (e) {
		console.error("error : ", e);
	}
};