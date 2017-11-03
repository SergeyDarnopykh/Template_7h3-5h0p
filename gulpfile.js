const gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    ejs = require('gulp-ejs'),
    gutil = require('gulp-util'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    imageminSvgo = require('imagemin-svgo'),
    imageminOptipng = require('imagemin-optipng'),
    imageminJpegtran = require('imagemin-jpegtran'),
    imageminGifsicle = require('imagemin-gifsicle'),
    cleanCSS = require('gulp-clean-css'),
    env = process.env.NODE_ENV || 'development';

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
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concat('all.css'))
        .pipe(autoprefixer())
        .pipe(env === 'development' || cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('img', () => {
    gulp.src('src/img/**/*.*')
        . pipe(env === 'development' || imagemin([
            imageminJpegtran({interlaced: true}),
            imageminGifsicle({progressive: true}),
            imageminOptipng({optimizationLevel: 5}),
            imageminSvgo({
                plugins: [
                    {removeViewBox: false},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest('./dist/img'));
});

gulp.task('svg', () => {
    gulp.src('src/img/**/*.svg')
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

