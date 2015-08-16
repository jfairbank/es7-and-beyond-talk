import gulp from 'gulp';
import watch from 'gulp-watch';
import shell from 'gulp-shell';
import path from 'path';

const SRC = path.resolve(__dirname, 'src/**/*.js');

const CMD = [
  `${path.resolve(__dirname, 'copy-syntax')} <%= file.path %>`
];

gulp.task('default', () =>
  gulp.src(SRC)
    .pipe(watch(SRC))
    .pipe(shell(CMD))
);
