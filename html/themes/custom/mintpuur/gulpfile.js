'use strict';

const importOnce = require('node-sass-import-once'),
    plumber = require('gulp-plumber'),
    gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    sass = require('gulp-sass'),
    autoprefixer = require('autoprefixer'),
    mqpacker = require('css-mqpacker'),
    sourcemaps = require('gulp-sourcemaps');

const options = {};

options.theme = {
    root: __dirname + '/',
    assets: __dirname + '/components/doc_assets/assets/',
    styles: __dirname + '/styles.scss',
    css: __dirname + '/assets/css/',
    fonts: __dirname + '/assets/fonts/',
    icons: __dirname + '/assets/icons/',
    images: __dirname + '/assets/images/'
};

options.scss = {
    importer: importOnce,
    includePaths: [
        options.theme.components
    ],
    outputStyle: 'expanded'
};

const scssProcessors = [
    autoprefixer({ browsers: ['> 1%', 'last 2 versions'] }),
    mqpacker({ sort: true })
];


gulp.task('fonts', function () {
    return gulp.src(options.theme.assets + 'fonts/*')
        .pipe(gulp.dest(options.theme.fonts))
});

gulp.task('icons', function () {
    return gulp.src(options.theme.assets + 'icons/*')
        .pipe(gulp.dest(options.theme.icons))
});


gulp.task('images', function () {
    return gulp.src(options.theme.assets + 'images/*')
        .pipe(gulp.dest(options.theme.images))
});

gulp.task('styles', function () {
    return gulp.src(options.theme.styles)
        .pipe(sourcemaps.init())
        .pipe($.sass(options.scss).on('error', sass.logError))
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe($.rename({ dirname: '' }))
        .pipe($.size({ showFiles: false }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(options.theme.css))
        .pipe($.cssmin())
        .pipe($.concat('styles.min.css'))
        .pipe($.postcss(scssProcessors))
        .pipe(gulp.dest(options.theme.css))
});

gulp.task('styles:watch', function () {
    gulp.watch(options.theme.components, ['styles']);
});

gulp.task('build', ['styles', 'fonts', 'icons', 'images']);

gulp.task('default', function(){
    console.log('No default task set! View gulpfile.js for an overview of the tasks.');
});