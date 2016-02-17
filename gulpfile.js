var gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  rename = require('gulp-rename'),
  cssnano = require('gulp-cssnano');

gulp.task('default', function () {
  gulp.src('src/toggle.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist'))
    .pipe(cssnano())
    .pipe(rename('toggle.min.css'))
    .pipe(gulp.dest('dist'));

  gulp.src('src/base.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist'))
});
