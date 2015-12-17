import path from 'path';

const DIST_PATH = 'dist/';
const SRC_PATH  = 'src/';
const TEST_PATH = 'test/';
const BASE_ENTRY = path.join(SRC_PATH, 'index.js');
const ANGULAR_ENTRY = path.join(SRC_PATH, 'angular.js');
const NO_LODASH_ENTRY = path.join(SRC_PATH, 'index.js');
const BASE_DIST_FILE = 'edm.js';
const ANGULAR_DIST_FILE = 'edm-angular.js';
const NO_LODASH_DIST_FILE = 'edm-no-lodash.js';

let config = {
    DIST_PATH,
    SRC_PATH,
    TEST_PATH,
    BASE_ENTRY,
    ANGULAR_ENTRY,
    NO_LODASH_ENTRY,
    BASE_DIST_FILE,
    ANGULAR_DIST_FILE,
    NO_LODASH_DIST_FILE,
    watch: false,
    tests: false
};

export function enableWatch() {
    config.watch = true;
}

export function enableTests() {
    config.tests = true;
}

export default config;
