var config  = require('../config/config');

// 작가 정보 가져오기
exports.getartistinfo = function (artist_sn, callback) {
	try {
		config.dbomavchmPool.acquire(function (err, conn) {
			if(err) console.error('err artist.getartistinfo 1', err);
			// console.log('data', data);
			conn.query('SELECT artist_name, artist_photo, artist_ment FROM artist WHERE artist_sn=?;', [artist_sn], function (err, result) {
				if (err) console.error('err artist.getartistinfo 2', err);
				callback(err, result);
			});
			config.dbomavchmPool.release(conn); //이걸 안하면 반납이 안됨
		});
	} catch (err) {
		console.error('error :', err);
	}
};


// 작가 약력 가져오기
exports.getartisthistory = function (artist_sn, callback) {
	try {
		config.dbomavchmPool.acquire(function (err, conn) {
			if(err) console.error('err artist.getartisthistory 1', err);
			// console.log('data', data);
			conn.query('SELECT * FROM artist_info WHERE artist_sn=?;', [artist_sn], function (err, results) {
				if (err) console.error('err artist.getartisthistory 2', err);
				callback(err, results);
			});
			config.dbomavchmPool.release(conn); //이걸 안하면 반납이 안됨
		});
	} catch (err) {
		console.error('error :', err);
	}
};

// 스타일 리스트 가져오기
exports.getstylelist = function (artist_sn, callback) {
	try {
		config.dbomavchmPool.acquire(function (err, conn) {
			if(err) console.error('err artist.getstylelist 1', err);
			// console.log('data', data);
			conn.query('SELECT style_sn, style_cover, style_name, style_adjective FROM style WHERE artist_sn=?;', [artist_sn], function (err, results) {
				if (err) console.error('err artist.getstylelist 2', err);
				callback(err, results);
			});
			config.dbomavchmPool.release(conn); //이걸 안하면 반납이 안됨
		});
	} catch (err) {
		console.error('error :', err);
	}
};