var gulp = require('gulp');

gulp.task('default', function () {
	console.log('COMPUTERNAME : ' + process.env.COMPUTERNAME);
	console.log('BRANCH : ' + process.env.BRANCH);
	console.log('ALL : ' + JSON.stringify(process.env));
});