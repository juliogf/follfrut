var gulp = require('gulp');
var bower = require('bower');

var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
    gulp.src('./app')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true,
            fallback: 'index.html'
        }));
});


var inject = require('gulp-inject');
var bowerFiles = require('main-bower-files');

gulp.task('inject', function() {

    gulp.src('./app/index.html')
        .pipe(inject(gulp.src(bowerFiles({
            paths: {
                bowerrc: '.bowerrc'
            }
        }), {
            read: false
        }), {
            name: 'bower',
            addRootSlash: false,
            ignorePath: 'app'
        }))
        .pipe(inject(gulp.src([
            './app/views/**/*.css',
            './app/views/**/*.js'
        ], {
            read: false
        }), {
            addRootSlash: false,
            ignorePath: 'app'
        }))
        .pipe(gulp.dest('./app'));

});