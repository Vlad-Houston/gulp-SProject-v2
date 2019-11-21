module.exports = function() {
  $.gulp.task("stylus", function() {
    return (
      $.gulp
        .src("src/static/stylus/main.styl")
        .pipe($.glp.sourcemaps.init())
        .pipe(
          $.glp.stylus({
            "include css": true
          })
        )
        // .pipe(glp.sass())
        // .pipe(glp.less())
        .pipe(
          $.glp.autoprefixer({
            overrideBrowserslist: ["last 10 versions"]
          })
        )
        .on(
          "error",
          $.glp.notify.onError({
            message: "Error: <%= error.message %>",
            title: "Style error"
          })
        )
        .pipe($.glp.csso())
        .pipe($.glp.sourcemaps.write())
        .pipe($.gulp.dest("build/static/css/"))
        .pipe($.browserSync.stream())
    );
  });
};
