var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var browserSync = require('browser-sync').create();


gulp.task('sass', function(){
	return gulp.src("./scss/main.scss")
		.pipe(sass())
		.on('error', function(e){
			gutil.log(gutil.colors.red(e));
		})
		.pipe(gulp.dest("./app/public/css"))
		.on('end', function(e){ gutil.log(gutil.colors.green('Css compilled'))})
		.pipe(browserSync.stream());
})

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: {
            baseDir: "app",
            routes: {
                "/bower_components": "bower_components"
            }
        }
    });

    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);