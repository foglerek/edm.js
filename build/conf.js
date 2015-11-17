import path from 'path';

export const DIST_PATH = 'dist/';
export const SRC_PATH  = 'src/';

export const BASE_ENTRY = path.join(SRC_PATH, 'index.js');
export const ANGULAR_ENTRY = path.join(SRC_PATH, 'angular.js');
export const NO_LODASH_ENTRY = path.join(SRC_PATH, 'index.js');
export const BASE_DIST_FILE = 'edm.js';
export const ANGULAR_DIST_FILE = 'edm-angular.js';
export const NO_LODASH_DIST_FILE = 'edm-no-lodash.js';

export function enableWatch() {
    config.watch = true;
}
export function enableTests() {
    config.tests = true;
}

let config = {
    DIST_PATH: DIST_PATH,
    SRC_PATH: SRC_PATH,
    BASE_ENTRY: BASE_ENTRY,
    ANGULAR_ENTRY: ANGULAR_ENTRY,
    NO_LODASH_ENTRY: NO_LODASH_ENTRY,
    BASE_DIST_FILE: BASE_DIST_FILE,
    ANGULAR_DIST_FILE: ANGULAR_DIST_FILE,
    NO_LODASH_DIST_FILE: NO_LODASH_DIST_FILE,
    watch: false,
    tests:false
};

export default config;
