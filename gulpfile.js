const gulp = require("gulp"),
  concat = require("gulp-concat"),
  cleanCss = require("gulp-clean-css"),
  htmlclean = require("gulp-htmlclean");

// html minify
function html(done) {
  gulp
    .src("./public/*.html")
    .pipe(concat("index.min.html"))
    .pipe(htmlclean({ collapseWhitespace: true }))
    .pipe(gulp.dest("./dist"));
  done();
}

// css minify
function css(done) {
  gulp.src("./public/css/*").pipe(concat("index.min.css")).pipe(cleanCss()).pipe(gulp.dest("./dist/css"));
  done();
}

// font from public to dist
function font(done) {
  gulp.src("./public/font/*").pipe(gulp.dest("./dist/font"));
  done();
}

// fontAwesome from public to dist
function fontAwesome(done) {
  gulp.src("./public/font-awesome/font-awesome-4.7.0/css/*").pipe(gulp.dest("./dist/font-awesome/font-awesome-4.7.0/css"));
  done();
}

// images from public to dist
function images(done) {
  gulp.src("./public/images/*").pipe(gulp.dest("./dist/images"));
  done();
}

// build
function build(done) {
  gulp.src("./dist/*").pipe(gulp.dest("build"));
  done();
}

// realization of tasks
exports.build = build;
exports.realizationOfTask = gulp.parallel(html, css, font, fontAwesome, images);
