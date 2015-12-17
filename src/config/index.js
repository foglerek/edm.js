import Error from '../error';
import isString from 'lodash/lang/isString';

function Config() {
    this.basePath = '';
}

Config.prototype.setBasePath = setBasePath;

function setBasePath(basePath) {
    if (!isString(basePath)) {
        throw new Error('Expected string');
    }
    this.basePath = basePath;
}

// Return Singleton by default.
module.exports = exports = new Config();
