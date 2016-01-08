import Store from '../src/store';
import Model from '../src/model';

describe('Store Module Test', function() {
    beforeEach(function() {

    });

    describe('Store', () => {
        it('should be instantiated with the passed options.', () => {
            let store = new Store({batchRequests:true});
            expect(store.config.batchRequests).toEqual(true);
        })

        it('should call addModel with any models passed after the config object', () => {
            let spy = spyOn(Store.prototype, 'addModel');

            let modelOne = new Model('foo');
            let modelTwo = new Model('bar');
            new Store({}, modelOne, modelTwo)

            expect(spy).toHaveBeenCalledWith(modelOne);
            expect(spy).toHaveBeenCalledWith(modelTwo);
        });

        it('should return an instance of the store', () => {
            let store = new Store();
            expect(store instanceof Store).toBe(true);
        });
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
