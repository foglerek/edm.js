import Error from './error';
import {isUndefined, isBoolean} from 'lodash';
import Config from './config';

// Check for existence of Angular
if (isUndefined(window.angular)) {
    throw new Error('Could not find angular. Please make sure to include angular before including edm-angular.js.');
}

// Add angular-specific configs
Config.autoFactories = false;
Config.prototype.setAutoFactories = setAutoFactories;


function setAutoFactories(bool) {
    if (!isBoolean(bool)) {
        throw new Error(`setAutoFactories() expects argument to be of type boolean, got '{0}' ({1})`, bool, (typeof bool));
    }

    this.autoFactories = bool;
};
