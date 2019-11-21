"use strict";

global.$ = {
  gulp: require("gulp"),
  glp: require("gulp-load-plugins")(),
  browserSync: require("browser-sync").create(),

  path: {
    tasks: require("./gulp/config/tasks.js")
  }
};

$.path.tasks.forEach(function(taskPath) {
  require(taskPath)();
});



$.gulp.task(
  "default",
  $.gulp.series(
    $.gulp.parallel("stylus", "scripts:lib", "scripts", "img:dev", "svg"),
    $.gulp.parallel("watch")
  )
);

//переробить на одноразовий виклик, викликав => зкомпілився => закінчив роботу
//додати del, і вігрузку файлів в папку dist=>build+index.html
$.gulp.task(
  "build",
  $.gulp.series(
    $.gulp.parallel("stylus", "scripts:lib", "scripts", "img:build", "svg"),
    $.gulp.parallel("watch")
  )
);