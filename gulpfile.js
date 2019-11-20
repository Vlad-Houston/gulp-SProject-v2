"use strict";

var gulp = require("gulp"),
  glp = require("gulp-load-plugins")(),
  browserSync = require("browser-sync").create();

gulp.task("browser-sync", function() {
  browserSync.init({
    server: {
      baseDir: "./build"
    }
  });
  browserSync.watch('build', browserSync.reload)
});

// gulp.task("pug", function() {
//   return gulp.src("src/pug/pages/*.pug").pipe(
//     glp
//       .pug({
//         pretty: true
//       })
//       .pipe(gulp.dest("build"))
//   );
// });

//Stylus, Sass, Less preprocessor
gulp.task("stylus", function() {
  return (
    gulp
      .src("src/static/stylus/main.styl")
      .pipe(glp.sourcemaps.init())
      .pipe(glp.stylus({}))
      // .pipe(glp.sass())
      // .pipe(glp.less())
      .pipe(
        glp.autoprefixer({
          overrideBrowserslist: ["last 10 versions"]
        })
      )
      .on(
        "error",
        glp.notify.onError({
          message: "Error: <%= error.message %>",
          title: "Style error"
        })
      )
      .pipe(glp.csso())
      .pipe(glp.sourcemaps.write())
      .pipe(gulp.dest("build/static/css"))
  );
});

gulp.task("watch", function() {
  // gulp.watch("src/pug/**/*.pug", gulp.series("pug"));
  gulp.watch("src/static/stylus/**/*.styl", gulp.series("stylus"));
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task("default", gulp.series(
  gulp.parallel("stylus"),
  gulp.parallel("watch", "browser-sync")
));
