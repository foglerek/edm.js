import gulp from 'gulp';
import {argv} from 'process';
import {enableWatch, enableTests} from './build/conf';

import './build/build';
import './build/test';

if (argv.includes('--dev')) {
    enableWatch();
    enableTests();

} else if(argv.includes('--test')) {
    enableTests();
}

gulp.start('build');
