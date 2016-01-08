import EDM from '../src';
import Store from '../src/store';

describe('EDM Module Test', () => {
    beforeEach(() => {

    });

    describe('createStore', () => {
        it('should return an instance of Store when called', () => {
            expect(EDM.createStore()).toEqual(new Store());
        });

        it('should be instantiated with the correct config', () => {
            let store = new Store({batchRequests: true});
            let edmStore = EDM.createStore({batchRequests: true});
            expect(edmStore.config).toEqual(store.config);
        });
    });
});
