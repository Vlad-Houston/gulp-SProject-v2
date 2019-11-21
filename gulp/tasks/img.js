module.exports = function() {
  $.gulp.task("img:dev", function() {
    return (
      $.gulp
        .src("src/static/img/*.{png,jpg,gif}")
        .pipe($.gulp.dest("build/static/img/"))
    );
  });

  $.gulp.task("img:build", function() {
    return (
      $.gulp
        .src("src/static/img/*.{png,jpg,gif}")
        .pipe($.glp.tinypng('B1QrfS0SWhmttdg0g4mz0tJ6SYw3dphx'))
        .pipe($.gulp.dest("build/static/img/"))
    );
  });
};
