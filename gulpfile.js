var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var concat  = require('gulp-concat');
var uglify  = require('gulp-uglify');
var rename  = require('gulp-rename');

gulp.task('compile', function () {
	gulp.src(['src/firebase.min.js', 'src/shim.js'])
		.pipe(plumber())
		.pipe(concat('index.js', {newLine: ''}))
		.pipe(gulp.dest(''))
		.pipe(uglify())
		.pipe(rename('index.min.js'))
		.pipe(gulp.dest(''))
	;
});

gulp.task('default', ['compile']);
