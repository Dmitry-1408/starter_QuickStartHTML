const gulp = require("gulp");
const browserSync = require("browser-sync");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const htmlmin = require("gulp-htmlmin");
const terser = require('gulp-terser');
const fileInclude = require('gulp-file-include'); // Подключаем gulp-file-include

gulp.task("server", function () {
  browserSync({
    server: {
      baseDir: "dist",
    },
  });

  gulp.watch("src/*.html").on("change", browserSync.reload);
});

gulp.task("styles", function () {
  return gulp
    .src("src/sass/**/*.+(scss|sass)")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(rename({ suffix: ".min", prefix: "" }))
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

gulp.task("watch", function () {
  gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel("styles"));
  gulp.watch("src/js/**/*.js", gulp.parallel("scripts"));
  gulp.watch("src/html/**/*.html", gulp.parallel("html")); // Следим за изменениями в src/html
});

gulp.task("html", function () {
  return gulp
    .src("src/html/index.html") // Основной файл index.html
    .pipe(fileInclude({ // Используем gulp-file-include для включения других HTML файлов
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(htmlmin({ 
      collapseWhitespace: true,
      removeComments: true // Удаляем комментарии
    }))
    .pipe(gulp.dest("dist/"))
    .pipe(browserSync.stream()); // Обновляем страницу после изменений
});

gulp.task("scripts", function () {
  return gulp
    .src("src/js/**/*.js")
    .pipe(terser()) // Минифицируем JS
    .pipe(rename({ suffix: ".min" })) // Переименовываем с суффиксом .min
    .pipe(gulp.dest("dist/js")) // Копируем в dist/js
    .pipe(browserSync.stream());
});

gulp.task("fonts", function () {
  return gulp.src("src/fonts/**/*").pipe(gulp.dest("dist/fonts"));
});

gulp.task("icons", function () {
  return gulp.src("src/icons/**/*").pipe(gulp.dest("dist/icons"));
});

gulp.task("images", function () {
  return gulp.src("src/img/**/*").pipe(imagemin()).pipe(gulp.dest("dist/img"));
});

gulp.task("audio", function () {
  return gulp.src("src/audio/**/*").pipe(gulp.dest("dist/audio"));
});

gulp.task(
  "default",
  gulp.parallel(
    "watch",
    "server",
    "styles",
    "scripts",
    "fonts",
    "icons",
    "html",
    "images",
    "audio" // Добавляем задачу для аудиофайлов
  )
);
