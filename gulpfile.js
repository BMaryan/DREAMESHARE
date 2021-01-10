const gulp = require('gulp'),
    concat = require('gulp-concat'),
    cleanCss = require("gulp-clean-css"),
    htmlclean = require('gulp-htmlclean');

// html minify 
function html(done) {
    gulp.src('./app/*.html')
        .pipe(concat('dreamshare.min.html'))
        .pipe(htmlclean({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'))
    done();
}

// css minify 
function css(done) {
    gulp.src('./app/css/*')
        .pipe(concat('dreamshare.min.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest('./dist/css'))
    done();
}

// font from app to dist
function font(done) {
    gulp.src('./app/font/*')
        .pipe(gulp.dest('./dist/font'))
    done();
}

// fontAwesome from app to dist
function fontAwesome(done) {
    gulp.src('./app/font-awesome/font-awesome-4.7.0/css/*')
        .pipe(gulp.dest('./dist/font-awesome/font-awesome-4.7.0/css'))
    done();
}

// images from app to dist
function images(done) {
    gulp.src('./app/images/*')
        .pipe(gulp.dest('./dist/images'))
    done();
}

// realization of tasks
exports.realizationOfTask = gulp.parallel(html, css, font, fontAwesome, images);