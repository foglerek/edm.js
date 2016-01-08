import Model from '../src/model';
import {accepts} from './helpers';

describe('Model Module Test', function() {
    beforeEach(function() {

    });

    describe('Model', () => {
        it('should be instantiated with the passed definition.', () => {
            accepts((arg) => new Model(arg), 'object|string');
        })
    });

    describe('addModel', () => {

    });

    describe('setConfig', () => {

    });

    describe('register', () => {

    });

    describe('on', () => {

    });
});
