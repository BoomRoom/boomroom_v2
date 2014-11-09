// Require Gulp
var gulp = require('gulp');

// Gulp Plugins
var sass = require('gulp-sass');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

///////////
// Tasks //
///////////

// Default
gulp.task('default', ['sass', 'js', 'watch']);

// SASS
gulp.task('sass', function() {
	return gulp.src('public/styles/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('public/styles/css'));
});

// Browserify
gulp.task('js', function() {
  browserify('./public/scripts/uncompiled/script.js')
    // .transform(reactify) // compiles the JSX for React
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('public/scripts/compiled'));
});


////////////// 
// Watchers //
////////////// 

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('public/styles/scss/*.scss', ['sass']);
    gulp.watch('public/scripts/uncompiled/*.js', ['js']);
});