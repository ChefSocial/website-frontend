var gulp = require('gulp');
var sass = require('gulp-sass');
var webAppDir = 'app/';
concat = require('gulp-concat'),

gulp.task('sass', function() {
	return gulp.src([webAppDir + 'modules/common/css/common.scss', webAppDir + '**/*.scss'])
		.pipe(concat('app.css'))
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(webAppDir + 'css/'));
});