const gulp = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const ejs = require('gulp-ejs');
const gutil = require('gulp-util');
const rename = require('gulp-rename');
const concat = require('gulp-concat');

gulp.task('browserSync', () => {
    browserSync.create();

    browserSync.init({
        server: {
            baseDir: 'dist'
        },
        files: [
            'dist/**/*.*'
        ]
    });
});


gulp.task('styles', () => {
    gulp.src('src/less/**/*.less')
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('img', () => {
    gulp.src('src/img/**/*.*')
        .pipe(gulp.dest('./dist/img'));
});

gulp.task('js', () => {
    gulp.src('src/js/**/*.*')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('html', () => {
    gulp.src('src/index.ejs')
        .pipe(ejs().on('error', gutil.log))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', () => {
    gulp.watch('src/less/**/*.less', ['styles']);
    gulp.watch('src/**/*.ejs', ['html']);
    gulp.watch('src/img/**/*.*', ['img']);
    gulp.watch('src/js/**/*.*', ['js']);
});


gulp.task('default', ['styles', 'html', 'img', 'js', 'watch', 'browserSync']);
gulp.task('prod', ['styles', 'html', 'img', 'js']);

