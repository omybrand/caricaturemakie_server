var config  = require('../config/config');

// 작가 정보 가져오기
exports.getartistinfo = function (style_sn, callback) {
	try {
		config.dbomavchmPool.acquire(function (err, conn) {
			if(err) console.error('err style.getartistinfo 1', err);
			// console.log('data', data);
			conn.query('SELECT a.artist_sn AS artist_sn, artist_photo, artist_ment, artist_able FROM artist a, style s WHERE s.artist_sn=a.artist_sn AND style_sn=?;', [style_sn], function (err, result) {
				if (err) console.error('err style.getartistinfo 2', err);
				callback(err, result);
			});
			config.dbomavchmPool.release(conn); //이걸 안하면 반납이 안됨
		});
	} catch (err) {
		console.error('error :', err);
	}
};

// 스타일 상세 정보
exports.showstyleinfo = function (style_sn, callback) { //리스트 풀
	try {
		config.dbomavchmPool.acquire(function (err, conn) {
			if(err) console.error('err style.showstyleinfo 1', err);
			// console.log('data', data);
			conn.query('SELECT style_sn, style_adjective, s.artist_sn, style_name, style_category, style_cover, style_digital, style_description, style_discount, style_a0, style_a1, style_a2, style_add1p, style_add2p, style_add3p, style_onesketch, style_onepointcolor, style_onecolor, style_onefullsketch, style_onefullpointcolor, style_onefullcolor, style_disonesketch, style_disonepointcolor, style_disonecolor, style_disonefullsketch, style_disonefullpointcolor, style_disonefullcolor, artist_able FROM style s, artist a WHERE s.artist_sn=a.artist_sn AND style_sn=?;', [style_sn], function (err, result) {
				if (err) console.error('err style.showstyleinfo 2', err);
				callback(err, result);
			});
			config.dbomavchmPool.release(conn); //이걸 안하면 반납이 안됨
		});
	} catch (err) {
		console.error('error:', err);
	}
};

// 해당 스타일 평점 구하기
exports.getstylerate = function (style_sn, callback) {
 	try {
 		config.dbomavchmPool.acquire(function (err, conn) {
 			if(err) console.error('err style.getstylerate 1', err);
 			// console.log('data', data);
 			conn.query('SELECT AVG(order_rate) AS rate FROM style s, orderlist o WHERE s.style_sn=o.order_style_sn AND o.order_valid=1 AND o.order_check=1 AND o.order_rate<=5 AND o.order_rate>0 AND o.order_style_sn=?;', [style_sn], function (err, result) {
 				if (err) console.error('err style.getstylerate 2', err);
 				callback(err, result);
 			});
 			config.dbomavchmPool.release(conn); //이걸 안하면 반납이 안됨
 		});
 	} catch (err) {
 		console.error('error:', err);
 	}
};

// 예상 날짜 구하기
exports.getfinaltime = function (artist_sn, callback) {
 	try {
 		config.dbomavchmPool.acquire(function (err, conn) {
 			if(err) console.error('err style.getfinaltime 1', err);
 			// console.log('data', data);
 			conn.query("SELECT DATE_FORMAT(order_finishtime, '%Y-%m-%d') AS order_finishtime FROM orderlist o WHERE o.order_artist_sn=? AND order_finishtime >= NOW() ORDER BY order_finishtime DESC;", [artist_sn], function (err, result) {
 				// console.log(results);
 				if (err) console.error('err style.getfinaltime 2', err);
 				callback(err, result);
 			});
 			config.dbomavchmPool.release(conn); //이걸 안하면 반납이 안됨
 		});
 	} catch (err) {
 		console.error('error:', err);
 	}
};

// 스타일 포트폴리오 리스트
exports.showstyleportlist = function (style_sn, callback) { //리스트 풀
	try {
		config.dbomavchmPool.acquire(function (err, conn) {
			if(err) console.error('err style.showstyleportlist 1', err);
			// console.log('data', data);
			conn.query('SELECT * FROM style_port WHERE style_sn=?;', [style_sn], function (err, results) {
				if (err) console.error('err style.showstyleportlist 2', err);
				callback(err, results);
			});
			config.dbomavchmPool.release(conn); //이걸 안하면 반납이 안됨
		});
	} catch (err) {
		console.error('error:', err);
	}
};