var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if'),
    cssnano = require('gulp-cssnano'),
    useref = require('gulp-useref'),
    del = require('del'),
    obfuscate = require('gulp-obfuscate');

gulp.task('default', ['browserSync', 'sass'], function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/*.js', browserSync.reload);
})

gulp.task('dist', ['clean:dist', 'useref', 'sass', 'uglify-css', 'uglify-js', 'copy-lib', 'copy-audio', 'images' ], function(){
})

gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass({
      includePaths: ['node_modules']
    })) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('uglify-css', function(){
  return gulp.src('app/css/**/*.css')
    .pipe(useref())
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('uglify-js', function(){
  return gulp.src('app/js/**/*.js')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('copy-lib', function(){
  return gulp.src('app/lib/**/*.js')
    .pipe(useref())
    .pipe(gulp.dest('dist/lib'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('compress', function(){
  return gulp.src('app/js/**/*.js')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('images', function(){
  return gulp.src('app/img/*.svg')
    .pipe(useref())
    .pipe(gulp.dest('dist/img'))
})

gulp.task('copy-audio', function(){
  return gulp.src('app/audio/*.m4a')
    .pipe(useref())
    .pipe(gulp.dest('dist/audio'))
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'))
})

gulp.task('clean:dist', function() {
  return del.sync('dist');
})
