var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    expect = require('gulp-expect-file'),
    cleanCSS = require('gulp-clean-css'),
    clean = require('gulp-clean'),
    del = require('del'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rev = require('gulp-rev'),
    revReplace = require('gulp-rev-replace'),
    runSequence = require('run-sequence'),
    babel = require("gulp-babel"),
    gulpConfig = require('./config').gulpConfig;

var jsLibSources = gulpConfig.jsLibSources,
    jsCustomSources = gulpConfig.jsCustomSources,
    cssLibSources = gulpConfig.cssLibSources,
    cssCustomSources = gulpConfig.cssCustomSources,
    sassSources = gulpConfig.sassSources,
    allSassSources = gulpConfig.allSassSources,
    fontsSources = gulpConfig.fontsSources,
    imageSources = gulpConfig.imageSources,
    indexPage = gulpConfig.indexPage,
    templateSources = gulpConfig.templateSources,
    env = process.env.NODE_ENV || 'development',
    destLocation = gulpConfig.destLocation;

gulp.task('html', ['jsLib', 'jsCustom', 'cssLib', 'cssCustom', 'sass', 'image', 'template'], function() {
    return  gulp
            .src(indexPage)
            .pipe(expect(indexPage))
            .pipe(gulp.dest(destLocation))
            .pipe(connect.reload())
});

gulp.task('image', function() {
    return  gulp
            .src(imageSources)
            .pipe(gulp.dest(destLocation + 'images/'))
});

gulp.task('template', function() {
    return gulp
            .src(templateSources)
            .pipe(gulp.dest(destLocation + 'templates/'))
            .pipe(connect.reload())
});

gulp.task('jsLib', function() {
    return  gulp
            .src(jsLibSources)
            .pipe(expect(jsLibSources))
            .pipe(concat('libraries.min.js'))
            .pipe(gulp.dest(destLocation + 'js/'))
});

gulp.task('jsCustom', function() {
    return  gulp
            .src(jsCustomSources)
            .pipe(sourcemaps.init())
            .pipe(babel())
            .pipe(concat('all.min.js'))
            .pipe(sourcemaps.write("./maps"))
            .pipe(gulp.dest(destLocation + 'js/'))
            .pipe(connect.reload())
});

gulp.task('fonts', function() {
  return gulp
          .src(fontsSources)
          .pipe(expect(fontsSources))
          .pipe(gulp.dest(destLocation + 'fonts/'))
})

gulp.task('cssLib', ['fonts'], function() {
    return  gulp
            .src(cssLibSources)
            .pipe(expect(cssLibSources))
            .pipe(concat('libraries.min.css'))
            .pipe(gulp.dest(destLocation + 'css/'))
});

gulp.task('cssCustom', function() {
    return  gulp
            .src(cssCustomSources)
            .pipe(concat('all.min.css'))
            .pipe(gulpif(env === 'production', cleanCSS({compatibility: 'ie8'})))
            .pipe(gulp.dest(destLocation + 'css/'))
            .pipe(connect.reload())
});

gulp.task('sass', function () {
    return gulp
            .src(sassSources)
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(sourcemaps.write('./maps'))
            .pipe(gulp.dest(destLocation + 'css/'))
            .pipe(connect.reload())
});

gulp.task('watch', function() {
    gulp.watch(jsCustomSources, ['jsCustom']);
    gulp.watch(cssCustomSources, ['cssCustom']);
    gulp.watch(indexPage, ['html']);
    gulp.watch(templateSources, ['template']);
    gulp.watch(imageSources, ['image']);
    gulp.watch(allSassSources, ['sass']);
})

gulp.task('connect', function() {
    connect.server({
      root : destLocation,
      livereload : true,
      port : 9999
    });
})

gulp.task('rev', function () {
  return gulp.src([destLocation + "**/*.css", destLocation + "**/*.js"])
    .pipe(rev())
    .pipe(gulp.dest(destLocation))
    .pipe(rev.manifest())
    .pipe(gulp.dest(destLocation))


})

gulp.task('revreplace', ['rev'], function(){
  var manifest = gulp.src(destLocation + "rev-manifest.json");
  return gulp.src(destLocation + "index.html")
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest(destLocation));
});

gulp.task('clean', function() {
  return del.sync(destLocation);
})

gulp.task('default', function (cb) {
  if(env === 'production'){
    runSequence('clean', 'html', 'revreplace', cb);
  }
  else{
    runSequence('clean', 'html', 'watch', 'connect', cb);
  }

});
