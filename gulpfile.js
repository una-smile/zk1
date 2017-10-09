/**
 * Created by smile on 2017/10/9.
 */
var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");

gulp.task('miniJs',function(){
    gulp.src(['./js/*.js'])
        .pipe(concat('newJs.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js'))
});