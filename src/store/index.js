import Error from '../error';
import Config from '../config';
import Model from '../model';
import {each, isPlainObject} from 'lodash';

class Store {
    constructor() {
        let args = Array.from(arguments);
        let passedConfig = isPlainObject(args[0]);
        let config = passedConfig ? args[0] : {};
        let models = passedConfig ? args.slice(1) : args;

        this.config = new Config(config);
        this.models = {};

        // Populate Model Store
        each(models, (model) => {
            model && this.addModel(model);
        });
    }

    addModel(model) {
        if (! (model instanceof Model)) {
            throw new Error('Models added to the store must be instances of Model, got {0} ({1})', model, (typeof model));
        }
        if (this.models.hasOwnProperty(model.name)) {
            throw new Error('Model {0} already exists in this store.', model.name);
        }
        this.models[model.name] = model;
    }
}

module.exports = exports = Store;
