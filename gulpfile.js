var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var notify = require("gulp-notify");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');
var livereload = require('gulp-livereload');

// var webpack = require('webpack');

// var $ = require('gulp-load-plugins')();

gulp.task('styles', function() {

  return gulp.src('static/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(gulp.dest('static/css'))
    .pipe(notify("style.css generated"))
    .pipe(livereload());
});



gulp.task('scripts', function() {
  return gulp.src('static/js/*.js')
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('static/js'))
    .pipe(notify('js compiled:'))
    .pipe($.connect.reload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('static/scss/*.scss', ['styles']);
    gulp.watch('static/js/*.js',['scripts']);
});

gulp.task('default', ['watch', 'styles', 'scripts'], function() {

});