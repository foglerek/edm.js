import gulp from 'gulp';
import {Server} from 'karma';
import conf from './conf';

gulp.task('test', (done) => {
    if (!conf.tests) {
        return done();
    }

    console.log('-> starting test server');
    new Server({
        frameworks: ['jasmine'],
        files: [
          'node_modules/lodash/index.js',
          'dist/**/*.js',
          'test/**/*.js'
        ],
        reporters: ['progress', 'coverage'],
        port: 9999,
        colors: true,
        singleRun: false,
        autoWatch: true,
        background: true,
        logLevel: 'ERROR',
        captureTimeout: 60000,
        browserDisconnectTimeout : 10000,
        browserDisconnectTolerance : 1,
        browserNoActivityTimeout : 60000,
        browsers: ['NodeWebkit', 'Firefox', 'Chrome'],
        plugins: [
            require('karma-jasmine'),
            require('karma-coverage'),
            require('karma-nodewebkit-launcher'),
            require('karma-chrome-launcher'),
            require('karma-firefox-launcher'),
            require('karma-sourcemap-loader')
        ],
        preprocessors: {
            'dist/**/*.js': ['sourcemap']
        }
    }, (c) => {
        if (c !== 0) {
            console.log(`Karma exited with code ${c}.`);
        }
        done();
    }).start();
});
