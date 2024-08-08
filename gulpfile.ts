const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');

// Compile Sass to CSS
gulp.task('sass', function() {
  return gulp.src('src/styles/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'));
});

// Minify CSS
gulp.task('minify-css', function() {
  return gulp.src('dist/main.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
});

// Optimize Images
gulp.task('imagemin', function() {
  return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

// Build task
gulp.task('build', gulp.series('sass', 'minify-css', 'imagemin'));
