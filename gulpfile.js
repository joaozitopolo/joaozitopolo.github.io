var gulp = require('gulp');
var render = require('gulp-nunjucks-render');

gulp.task('nunjucks', buildNunjucks);
gulp.task('watch', gulp.series(buildNunjucks, watchFiles));
gulp.task('default', gulp.series(buildNunjucks));

function buildNunjucks() {
    return gulp.src('src/**/*.+(njk)')
        .pipe(render({
            path: ['src/templates']
        }))
        .pipe(gulp.dest('.'));
}

function watchFiles() {
    gulp.watch("src/**/*.+(njk)", buildNunjucks);
}
