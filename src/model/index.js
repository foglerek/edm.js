import Error from '../error';
import {isPlainObject, isString, isFunction, isUndefined, isEmpty} from 'lodash';

class Model {
    constructor() {
        let args       = Array.from(arguments);
        let definition = isPlainObject(args[0]) ? args[0] : {};
        let name       = isString(args[0]) ? (definition.name = args[0]) : definition.name;

        if (! isString(definition.name) || isEmpty(definition.name)) {
            throw new Error(`Model definition requires a name to be specified, got '{0}' ({1}).`, definition.name, (typeof definition.name));
        }
        if (! isUndefined(definition.idAttribute) && ! isString(definition.idAttribute)) {
            throw new Error(`Model definition expects the idAttribute attribute to be a string, got '{0}' ({1}).`, definition.idAttribute, (typeof definition.idAttribute));
        }
        if (! isUndefined(definition.endpoint) && (! isString(definition.endpoint) && ! isFunction(definition.endpoint) && ! isPlainObject(definition.endpoint))) {
            throw new Error(`Model definition expects the endpoint attribute to be a string or a function, got '{0}' ({1}).`, definition.endpoint, (typeof definition.endpoint));
        }
        if (! isUndefined(definition.relations) && ! isPlainObject(definition.relations)) {
            // We could do relation syntax validation here.
            throw new Error(`Model definition expects the relations attribute to be a plain object, got '{0}' ({1}).`, definition.relations, (typeof definition.relations));
        }
        if (! isUndefined(definition.deserialize) && ! isFunction(definition.deserialize)) {
            throw new Error(`Model definition expects the deserialize attribute to be a function, got '{0}' ({1}).`, definition.deserialize, (typeof definition.deserialize));
        }

        this.definition = definition;
    }
}

module.exports = exports = Model;


