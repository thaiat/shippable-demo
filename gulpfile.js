var gulp = require('gulp');

gulp.task('default', function () {
	console.log('COMPUTERNAME : ' + process.env.COMPUTERNAME);
	console.log('BRANCH : ' + process.env.BRANCH);
	console.log('AND ALL NOW ----');
	for (var key in process.env) {
		console.log(key + ' : ' + process.env[key]);
	}

});