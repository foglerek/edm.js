'use strict';

import map from 'lodash/collection/map';

function EDM() {

}

// Make constructor available to user if needed.
EDM.prototype.EDM = EDM;


// Return Singleton by default.
module.exports = exports = new EDM();
