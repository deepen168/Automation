'use strict'

var gulp = require("gulp");
var gulpProtractor = require("gulp-protractor");
var protractor = gulpProtractor.protractor;
 
gulp.task("one",function(){
    // var arg = [
    //     "--suite=full"
    // ]
    return gulp.src(["specs/*.js"])
            .pipe(protractor({
                configFile: "conf.js",
                //args: arg
            }))
            .on('error', function(e) { throw e })
});

gulp.task("two",function(){
    // var arg = [
    //     "--suite=another"
    // ]
    return gulp.src(["specs/*.js"])
            .pipe(protractor({
                configFile: "conf.js",
                // args: arg
            }))
            .on('error', function(e) { throw e })
});


//Task runners
gulp.task("protractor", gulp.series("one"));

// gulp.task("preprotractor", webdriverStandalone);
