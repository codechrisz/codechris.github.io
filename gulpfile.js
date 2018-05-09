var gulp = require('gulp');
// var sass = require('gulp-sass');
// var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

// gulp.task('styles', function(done) {
// 	gulp.src('.css')
// 		.pipe(autoprefixer({
// 			browsers: ['last 2 versions']
// 		}))
// 		.pipe(gulp.dest('./css'))
// 		.pipe(browserSync.stream());
// 		done();
// });

gulp.task('default', function(done) {
	gulp.watch('*.css')
		.on('change', browserSync.reload);

	browserSync.init({
		server: './'
	});
	done();
});

// gulp.series('styles',