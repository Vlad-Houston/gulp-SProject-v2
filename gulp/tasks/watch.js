module.exports = function() {
  $.gulp.task("watch", function() {
    $.browserSync.init({
      server: {
        baseDir: "./"
      }
    });
    // gulp.watch("src/pug/**/*.pug", gulp.series("pug"));
    $.gulp.watch("src/static/stylus/**/*.styl", $.gulp.series("stylus"));
    $.gulp.watch("src/static/js/*.js", $.gulp.series("scripts", "scripts:lib"));
    $.gulp.watch("src/static/img/*", $.gulp.series("img:dev"));
    $.gulp.watch("src/static/img/svg/*", $.gulp.series("svg"));
    $.gulp.watch("./*.html").on("change", $.browserSync.reload);
  });
};
