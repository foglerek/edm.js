import Error from '../error';
import {isString, isBoolean, isPlainObject, defaults, assign} from 'lodash';

/**
 * [Config description]
 */
function Config(config) {
    assign(this,
        defaults(config || {}, {
            basePath: '',
            verbose: false,
            batchRequests: false,
            deleteKey: null,

            getHeaders:    {},
            deleteHeaders: {},
            postHeaders:   {},
            putHeaders:    {}
        })
    );
}

Config.prototype.setBasePath = setBasePath;
Config.prototype.setVerbose = setVerbose;
Config.prototype.setBatchRequests = setBatchRequests;
Config.prototype.setDeleteKey = setDeleteKey;
Config.prototype.setGetHeaders = setGetHeaders,
Config.prototype.setDeleteHeaders = setDeleteHeaders,
Config.prototype.setPostHeaders = setPostHeaders,
Config.prototype.setPutHeaders = setPutHeaders,
Config.prototype.getRequestHeaders = getRequestHeaders;

/**
 * [setBasePath description]
 * @param {[type]} basePath [description]
 */
function setBasePath(basePath) {
    if (!isString(basePath)) {
        throw new Error('Expected string');
    }
    this.basePath = basePath;
}

function setVerbose(verbose) {
    if (!isBoolean(verbose)) {
        throw new Error(`setVerbose() expected argument to be of type boolean, got '{0}' ({1})`, verbose, (typeof verbose));
    }

    this.verbose = verbose;
}

function setBatchRequests(bool) {
    if (!isBoolean(bool)) {
        throw new Error(`setBatchRequests() expects argument to be of type boolean, got '{0}' ({1})`, bool, (typeof bool));
    }

    this.batchRequests = bool;
}

function setDeleteKey(deleteKey) {
    if (!isString(deleteKey)) {
        throw new Error(`setDeleteKey() expects argument to be of type string, got '{0}' ({1})`, deleteKey, (typeof deleteKey));
    }

    this.deleteKey = deleteKey;
}

function setGetHeaders(headers) {
    if (!isPlainObject(headers)) {
        throw new Error(`setGetHeaders() expects argument to be of type plain objhect, got '{0}' ({1})`, headers, (typeof headers));
    }

    this.getHeaders = headers;
}

function setDeleteHeaders(headers) {
    if (!isPlainObject(headers)) {
        throw new Error(`setDeleteHeaders() expects argument to be of type plain objhect, got '{0}' ({1})`, headers, (typeof headers));
    }

    this.deleteHeaders = headers;
}

function setPostHeaders(headers) {
    if (!isPlainObject(headers)) {
        throw new Error(`setPostHeaders() expects argument to be of type plain objhect, got '{0}' ({1})`, headers, (typeof headers));
    }

    this.postHeaders = headers;
}

function setPutHeaders(headers) {
    if (!isPlainObject(headers)) {
        throw new Error(`setPutHeaders() expects argument to be of type plain objhect, got '{0}' ({1})`, headers, (typeof headers));
    }

    this.putHeaders = headers;
}

function getRequestHeaders(type) {
    if (!isString(type)) {
        throw new Error(`getRequestHeaders() expects argument to be of type string, got '{0}' ({1})`, type, (typeof type));
    }

    switch (type.toLowerCase()) {
        case 'get':
            return this.getHeaders;
        case 'post':
            return this.postHeaders;
        case 'put':
            return this.putHeaders;
        case 'delete':
            return this.deleteHeaders;
        default:
            throw new Error(`getRequestHeaders() received unexpected request type '{0}'`, type);
    }
}

// Export Constructor
module.exports = exports = Config;
