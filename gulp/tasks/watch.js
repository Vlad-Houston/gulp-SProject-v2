module.exports = function() {
  $.gulp.task("watch", function() {
    $.browserSync.init({
      server: {
        baseDir: "./"
      }
    });
    // gulp.watch("src/pug/**/*.pug", gulp.series("pug"));
    $.gulp.watch("src/static/stylus/**/*.styl", $.gulp.series("stylus"));
    $.gulp.watch("./*.html").on("change", $.browserSync.reload);
  });
};
