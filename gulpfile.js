// Requis
var gulp = require('gulp');

// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

// Variables de chemins
var appSrc = 'less'; // dossier de travail
var appDest = 'css'; // dossier à livrer

gulp.task('default', function () {
  return gulp.src(appSrc + '/theme.less')
  .pipe(plugins.less())
  .pipe(plugins.importCss())
  .pipe(autoprefixer({
      browsers: ['Chrome > 1'],
      flexbox : true
  }))
  .pipe(plugins.cssbeautify({indent: '  '}))
  .pipe(plugins.concat('styles.css'))
  .pipe(cleanCSS())
  .pipe(gulp.dest(appDest));
});

//Exemple taches multiples
//gulp.task('all', ['task1','task2']);

//Exemple de fonction
//  gulp.task('www_doc_dev', function() {
//   buildGulpPipeCSS("www/doc/css/**/*.less", "www/doc/css/", "doc.css");
// });

// function buildGulpPipeCSS(source, destination, cssFileName) {
//   gulp.src(source)
//   .pipe(plugins.less())
//   .pipe(concatCSS(cssFileName, {rebaseUrls: false}))
//   .pipe(gulp.dest(destination));
// }

