import Error from '../src/error';
import {chain, map, fill, without} from 'lodash';

module.exports = {
    accepts
};

let types = [
    'undefined',
    'null',
    'array',
    'object',
    'boolean',
    'function',
    'string',
    'number'
];

function accepts(cb) {
    let args = Array.from(arguments).slice(1);

    args.forEach((testedArgType, testedArgIdx) =>
        generateArgVariations(args, testedArgType, testedArgIdx).forEach((args) => {
            expect(() => cb(...args)).toThrowError(Error)
        })
    );
}

function generateArgVariations(args, testedArgType, testedArgIdx) {
    let res = chain(types)
        .without(...testedArgType.split('|'))
        .map((currentTestType) =>
            map(args, (currentArg, currentArgIdx) =>
                currentArgIdx === testedArgIdx ? generateArg(currentTestType) : generateArg(currentArg)
            )
        )
        .value();
    return res;
}

function generateArg(type) {
    switch(type) {
        case 'undefined':
            return undefined;
        case 'null':
            return null;
        case 'array':
            return [];
        case 'object':
            return {};
        case 'boolean':
            return false;
        case 'function':
            return () => {};
        case 'string':
            return '123';
        case 'number':
            return 123;
        default:
            return type;
    };
}
