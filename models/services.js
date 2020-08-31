var config  = require('../config/config');

// 총 스타일 건수 구하기
exports.getstylecount = function (callback) {
	try {
		config.dbomavchmPool.acquire(function (err, conn) {
			if(err) console.error('err services.getstylecount 1', err);
			// console.log('data', data);
			conn.query('SELECT COUNT(style_sn) AS cnt FROM style s, artist a WHERE s.artist_sn=a.artist_sn AND a.artist_longtime=0;', [], function (err, result) {
				if (err) console.error('err services.getstylecount 2', err);
				callback(err, result[0].cnt);
			});
			config.dbomavchmPool.release(conn); //이걸 안하면 반납이 안됨
		});
	} catch (err) {
		console.error('error :', err);
	}
};

// 스타일 리스트 받기
exports.getstylelist = function (callback) {
	try {
		config.dbomavchmPool.acquire(function (err, conn) {
			if(err) console.error('err services.getstylelist 1', err);
			// console.log('data', data);
			conn.query('SELECT s.artist_sn AS artist_sn, style_sn, style_cover, style_adjective, style_name, artist_name FROM style s, artist a WHERE s.artist_sn=a.artist_sn AND a.artist_longtime=0;', [], function (err, results) {
				if (err) console.error('err services.getstylelist 2', err);
				callback(err, results);
			});
			config.dbomavchmPool.release(conn); //이걸 안하면 반납이 안됨
		});
	} catch (err) {
		console.error('error :', err);
	}
};