import Error from './error';
import Store from './store';

function EDM() {
    this.createStore = function(config) {
        return new Store(config);
    }
}

// Make constructor available to user if needed.
EDM.prototype.EDM = EDM;

// Return Singleton by default.
module.exports = exports = new EDM();
