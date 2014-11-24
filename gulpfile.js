// Require Gulp
var gulp = require('gulp');

// Gulp Plugins
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var nodemon = require('gulp-nodemon');
var watch = require('gulp-watch');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var browserify = require('browserify');
var reactify = require('reactify')
var source = require('vinyl-source-stream');


///////////
// Tasks //
///////////

// Default
gulp.task('default', ['nodemon', 'sass', 'js', 'minify', 'watch']);

// Nodemon
gulp.task('nodemon', function () {
  nodemon({ script: 'server.js', ext: 'html js', ignore: [] })
    .on('change', [])
    .on('restart', function () {
      console.log('restarted!')
    })
});

// SASS
gulp.task('sass', function() {
	return gulp.src('public/styles/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('public/styles/css'));
});

// Browserify
gulp.task('js', function() {
  browserify('./public/scripts/uncompiled/script.js')
    .transform(reactify) // compiles the JSX for React
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('public/scripts'));
});

// Compile Icons (SVGs)
gulp.task('webfont', function(){
  gulp.src(['./public/images/svg/*.svg'])
    .pipe(iconfont({ fontName: 'myfont' }))
    .on('codepoints', function(codepoints, options) {
        gulp.src('./public/templates/icons.css')
        .pipe(consolidate('lodash', {
            glyphs: codepoints,
            fontName: 'myfont',
            fontPath: '../fonts/',
            className: 'icon'
        }))
        .pipe(gulp.dest('./public/styles/css/'));
    })
    .pipe(gulp.dest('./public/fonts/'));
});

// Uglify
gulp.task('minify', function() {
	// return gulp.src('public/scripts/compiled/*.js')
	// 	.pipe(uglify())
	// 	.pipe(gulp.dest('public/scripts'));
});


////////////// 
// Watchers //
////////////// 

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./public/styles/scss/*.scss', ['sass']);
    gulp.watch('./public/scripts/uncompiled/*.js', ['js']);
    gulp.watch('./public/backbone/**/*.js', ['js']);
});

