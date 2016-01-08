import Error from '../src/error';

describe('Error Module Test', function() {

    beforeEach(function() {

    });

    it('should have a default message if no message is passed', function() {
        let error = new Error();
        expect(error.message).toEqual('Unknown error');
    });

    it('should correctly parse error message parameters', function() {
        let error = new Error('{0} {1} {2} {3}', 'this', 'is', 'a', 'problem');
        expect(error.message).toEqual('this is a problem');
    });
});
