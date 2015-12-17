import Error from './error';
import Config from './config';

function EDM() {
    Config.setBasePath('asb');
}

// Make constructor available to user if needed.
EDM.prototype.EDM = EDM;

// Return Singleton by default.
module.exports = exports = new EDM();
