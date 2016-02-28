var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var reactify = require('reactify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var webserver = require('gulp-webserver');

gulp.task('default', function() {
    nodemon({
        script: './api/server.js',
        ext: 'js',
        env: {
            PORT: 8000
        },
        ignore: ['./node_modules/**']
    }).
    on('start', ['scripts', 'webserver']);
});

gulp.task('webserver', function () {
    gulp.src('dist/')
        .pipe(webserver({
            port: 5000,
            open: true
        }));
});

gulp.task('scripts', function() {
    var b = browserify({
        entries: ['./src/app.js'],
        transform: [reactify],
        debug: true
    });
    return b
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(gulp.dest('dist/'))
    ;
});