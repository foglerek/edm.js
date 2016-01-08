import Config from '../src/config';
import Error from '../src/error';
import {assign} from 'lodash';
import {accepts} from './helpers';

let config;

describe('Config module', () => {

    beforeEach(() => {
        config = new Config();
    });

    it('should default to the correct settings', () => {
        // Need to convert from instance of Config to
        // a plain object.
        expect(assign({}, config)).toEqual({
            basePath: '',
            verbose: false,
            batchRequests: false,
            deleteKey: null,
            getHeaders:    {},
            deleteHeaders: {},
            postHeaders:   {},
            putHeaders:    {}
        });
    });

    describe('BasePath', () => {
        it('should throw an error if passed a non-string value', () => {
            accepts(config.setBasePath, 'string');
        });

        it('should set and store values', () => {
            expect(config.basePath).toEqual('');
            config.setBasePath('abc');
            expect(config.basePath).toEqual('abc');
        });
    });

    describe('Verbose', () => {
        it('should throw an error if passed a non-boolean value', () => {
            accepts(config.setVerbose, 'boolean');
        });

        it('should set and store values', () => {
            expect(config.verbose).toEqual(false);
            config.setVerbose(true);
            expect(config.verbose).toEqual(true);
        });
    });

    describe('BatchRequests', () => {
        it('should throw an error if passed a non-boolean value', () => {
            accepts(config.setBatchRequests, 'boolean');
        });

        it('should set and store values', () => {
            expect(config.batchRequests).toEqual(false);
            config.setBatchRequests(true);
            expect(config.batchRequests).toEqual(true);
        });
    });

    describe('DeleteKey', () => {
        it('should throw an error if passed a non-string value', () => {
            accepts(config.setDeleteKey, 'string');
        });

        it('should set and store values', () => {
            expect(config.deleteKey).toEqual(null);
            config.setDeleteKey('_delete');
            expect(config.deleteKey).toEqual('_delete');
        });
    });

    describe('GetHeaders', () => {
        it('should throw an error if passed a non-plain object value', () => {
            accepts(config.setGetHeaders, 'object');
        });

        it('should set and store values', () => {
            expect(config.getHeaders).toEqual({});
            config.setGetHeaders({'Content-Type': 'json'});
            expect(config.getHeaders).toEqual({'Content-Type': 'json'});
        });
    });

    describe('DeleteHeaders', () => {
        it('should throw an error if passed a non-plain object value', () => {
            accepts(config.setDeleteHeaders, 'object');
        });

        it('should set and store values', () => {
            expect(config.deleteHeaders).toEqual({});
            config.setDeleteHeaders({'Content-Type': 'json'});
            expect(config.deleteHeaders).toEqual({'Content-Type': 'json'});
        });
    });

    describe('PostHeaders', () => {
        it('should throw an error if passed a non-plain object value', () => {
            accepts(config.setPostHeaders, 'object');
        });

        it('should set and store values', () => {
            expect(config.postHeaders).toEqual({});
            config.setPostHeaders({'Content-Type': 'json'});
            expect(config.postHeaders).toEqual({'Content-Type': 'json'});
        });
    });

    describe('PutHeaders', () => {
        it('should throw an error if passed a non-plain object value', () => {
            accepts(config.setPutHeaders, 'object');
        });

        it('should set and store values', () => {
            expect(config.putHeaders).toEqual({});
            config.setPutHeaders({'Content-Type': 'json'});
            expect(config.putHeaders).toEqual({'Content-Type': 'json'});
        });
    });

    describe('RequestHeaders', () => {
        it('should throw an error if passed a non-string value', () => {
            accepts(config.getRequestHeaders, 'string');
        });

        it('should throw an error if passed an illegal string key', () => {
            expect(() => config.getRequestHeaders('abc')).toThrowError(Error);
        });

        it('should accept CRUD string keys as arguments', () => {
            expect(() => config.getRequestHeaders('get')).not.toThrowError(Error);
            expect(() => config.getRequestHeaders('post')).not.toThrowError(Error);
            expect(() => config.getRequestHeaders('put')).not.toThrowError(Error);
            expect(() => config.getRequestHeaders('delete')).not.toThrowError(Error);
        });

        it('should correctly retrieve current request headers', () => {
            let header = {'Content-Type': 'json'};
            config.setGetHeaders(header);
            config.setDeleteHeaders(header);
            config.setPostHeaders(header);
            config.setPutHeaders(header);

            expect(config.getRequestHeaders('get')).toEqual(header);
            expect(config.getRequestHeaders('delete')).toEqual(header);
            expect(config.getRequestHeaders('post')).toEqual(header);
            expect(config.getRequestHeaders('put')).toEqual(header);
        });
    });
});
