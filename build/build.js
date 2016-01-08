import gulp from 'gulp';
import sequence from 'run-sequence';
import del from 'del';
import path from 'path';
import browserify from 'browserify';
import sourcemaps from 'gulp-sourcemaps';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import watchify from 'watchify';
import babelify from 'babelify';
import shim from 'browserify-shim';
import through from 'through';
import eslint from 'gulp-eslint';
import conf from './conf';
import './test';

gulp.task('build', (done) => sequence('clean', 'compile', 'test', done));

gulp.task('clean', () =>
    del(path.join(conf.DIST_PATH, '**/*'))
);

gulp.task('compile', ['compile:base', 'compile:angular', 'compile:no_lodash', 'compile:tests'], () => {
    console.log('-> build watchers started');
});

gulp.task('compile:tests', () => compile(conf.TEST_ENTRY, conf.COMPILED_TEST_FILE));

gulp.task('compile:base', () =>
    compile(conf.BASE_ENTRY, conf.BASE_DIST_FILE, (b) => b.on('bundle', lint))
);

gulp.task('compile:angular', () => compile(conf.ANGULAR_ENTRY, conf.ANGULAR_DIST_FILE));

gulp.task('compile:no_lodash', () =>
    compile(conf.NO_LODASH_ENTRY, conf.NO_LODASH_DIST_FILE, (b) =>
        b.transform(shim, {
            global: true
        })
    )
);

function lint() {
    return gulp.src(path.join(conf.SRC_PATH, '**/*.js'))
      .pipe(eslint())
      .pipe(eslint.formatEach());
}

function compile(entry, exit, cb) {
    let b = browserify(
        entry,
    {
        debug: true,
        plugin: [watchify]
    });

    b.transform(babelify);

    function build() {
        return b.bundle()
            .on('error', function(err) { console.error(err); this.emit('end'); })
            .pipe(source(exit))
            .pipe(buffer())
            .pipe(sourcemaps.init({ loadMaps: true }))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(conf.DIST_PATH));
    }

    if (conf.watch) {
        b.on('update', function() {
            console.log('-> rebuilding...');
            build();
        });
    }

    // Allow modification of bundle before building
    if (cb) {
        cb(b);
    }

    return build();
}
