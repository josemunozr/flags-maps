var gulp = require('gulp')
var jade = require('gulp-jade')
var babel = require('gulp-babel')

gulp.task('template', function () {
  gulp.src('src/client/**/*.jade')
    .pipe(jade({
      locals: 'index.html'
    }))
    .pipe(gulp.dest('./public'))
})

gulp.task('babel', function () {
  gulp.src('src/server/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./dist/src/server'))
})

gulp.task('copy:img', function () {
  gulp.src('src/client/asset/img/*.png')
  .pipe(gulp.dest('./public/img'))
})

gulp.task('copy:css', function () {
  gulp.src('src/client/asset/*.css')
  .pipe(gulp.dest('./public'))
})

gulp.task('copy', ['copy:img', 'copy:css'])

gulp.task('watch', function () {
  gulp.watch('./src/client/**/*.jade', ['template']),
  gulp.watch('./src/client/asset/*.css', ['copy:css'])
})

gulp.task('default', ['watch', 'template', 'babel', 'copy'])
