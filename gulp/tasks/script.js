module.exports = function() {
  $.gulp.task("scripts:lib", function() {
    var pathLibScripts = ["node_modules/jquery/dist/jquery.min.js"];

    return $.gulp
      .src(pathLibScripts)
      .pipe($.glp.concat("libs.min.js"))
      .pipe($.gulp.dest("build/static/js/"))
      .pipe(
        $.browserSync.reload({
          stream: true
        })
      );
  });

  $.gulp.task("scripts", function() {
    return $.gulp
      .src("src/static/js/main.js")
      .pipe($.gulp.dest("build/static/js/"))
      .pipe(
        $.browserSync.reload({
          stream: true
        })
      );
  });
};
