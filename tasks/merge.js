var
  concat    = require('gulp-concat'),
  concatCss = require('gulp-concat-css'),
  cssmin    = require('gulp-cssmin'),
  del       = require('del'),
  fs        = require('fs'),
  gulp      = require('gulp'),
  jeditor   = require('gulp-json-editor'),
  path      = require('path'),
  prompt    = require('gulp-prompt'),
  readline  = require('readline'),
  sequence  = require('run-sequence'),
  queue     = require('streamqueue'),
  uglify    = require('gulp-uglify');

var meta = require('../package.json');

// Merge sequence
gulp.task('merge', function(callback) {

  gulp.src('build/assets')
    console.log('Merging assets…');

    sequence(
          ['merge:js', 'merge:css', 'merge:php'],
          'post-merge',
          callback
        );

      gulp
      .src("build/config.json")
      .pipe(jeditor({
        'general': {
          'concat_assets': true
        }
      }))
      .pipe(gulp.dest("build/"));

});


// Merge JS files
gulp.task('merge:js', function(){

    return queue({ objectMode: true },
       // gulp.src('build/assets/js/jquery.min.js'),
       // gulp.src('build/assets/js/bootstrap.min.js'),
       gulp.src('build/assets/js/highlight.min.js'),
       gulp.src('build/assets/js/jquery.searcher.min.js'),
       gulp.src('build/assets/js/stupidtable.min.js'),
       gulp.src('build/assets/js/listr.min.js')
    )
    .pipe(concat('listr.pack.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/assets/js/'));
});


// Merge CSS files
gulp.task('merge:css', function(){

  return gulp.src([
      'build/assets/css/font-awesome.min.css',
      'build/assets/css/bootstrap.min.css',
      'build/assets/css/highlight.min.css',
      'build/assets/css/listr.min.css'
    ])
    .pipe(concatCss('listr.pack.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('build/assets/css/'));
});


// Merge PHP files
gulp.task('merge:php', ['concat'], function() {
  return gulp.src('build/index.php')
      .pipe(replace('require_once\(\'([\w-]+\.php)\'\);', function(match, p1) {
        if (p1 == 'listr-template.php') {
          return '';
        } else if (p1 == 'parsedown/Parsedown.php') {
          return p1
        } else if (p1 == 'listr-l10n.php') {
          var file = '';
          var rl = readline.createInterface({
            input: fs.createReadStream(path.join('build', p1))
          });
          rl.on('line', function(line) {
            if (!(line == '<?php' || line == '?>')) {
              // Supplement indent, so it will be properly indented in the output
              file += '    ' + line;
            }
          });
          return file
        } else {
          return fs.readFileSync(path.join('build', p1)).split('<?php')[1].split('?>')[0];
        }
      }))
      .pipe(gulp.dest('build'));
});
gulp.task('concat', function() {
  return gulp.src(['index.php', 'listr-template.php'])
    .pipe(concat('index.php'))
    .pipe(gulp.dest('build'));
})


// Clean up after merge
gulp.task('post-merge', function() {

  return del([
    'build/assets/css/*.css',
    '!build/assets/css/listr.pack.css',
    'build/assets/js/*.js',
    '!build/assets/js/bootlint.js',
    '!build/assets/js/bootstrap.min.js',
    '!build/assets/js/jquery.min.js',
    '!build/assets/js/listr.pack.js',
    'build/*.php',
    '!build/index.php'
  ]);
});
