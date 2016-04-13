var gulp = require('gulp')
var jade = require('gulp-jade')

gulp.task('template', function () {
  gulp.src('src/client/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./public/'))
})

gulp.task('watch', function () {
  gulp.watch('./src/client/**/*.jade', ['template'])
})

gulp.task('default', ['watch','template'])
