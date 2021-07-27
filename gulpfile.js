const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const browseSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

gulp.task('copyJS', function(){
  return gulp.src('app/js/*.js')
  .pipe(gulp.dest('C:/Users/Ivan/Downloads/openserver/openserver/domains/test/js/'))
});

gulp.task('copyHTML', function(){
  return gulp.src('app/**/*.html')
  .pipe(gulp.dest('C:/Users/Ivan/Downloads/openserver/openserver/domains/test/'))
});

gulp.task('sassToCSS', function(){
  return gulp.src('app/scss/*.scss')
  .pipe(sass({
    //errorLogToConsole:true,
    //outputStyle: 'compressed'
  }))
  .on('error',console.error.bind(console))
  .pipe(gulp.dest('C:/Users/Ivan/Downloads/openserver/openserver/domains/test/css/'))
});

gulp.task('default', function(){
  gulp.watch('app/scss/*.scss', gulp.series('sassToCSS'));
  gulp.watch('app/js/*.js', gulp.series('copyJS'));
  gulp.watch('app/**/*.html', gulp.series('copyHTML'));
});

gulp.task('autoPrefixCSS', function(){
  return gulp.src('C:/Users/Ivan/Downloads/openserver/openserver/domains/test/css/main.css')
    .pipe(autoprefixer({
      overrideBrowserslist:['last 10 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('C:/Users/Ivan/Downloads/openserver/openserver/domains/test/css'));
});

gulp.task('serve', function(){
  browseSync.init({
    serve:'public'
  });
  browseSync.watch('public/**/*.*').on('change',browseSync.reload);
});

//gulp.task('default', gulp.parallel('watchSCSS', 'serve'));
