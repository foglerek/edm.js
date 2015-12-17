function EDMException(e) {
    let args = Array.from(arguments).slice(1);
    this.message = e.replace(/{(\d+)}/g, (match, number) => {
        return args[number];
    });
    this.stack = (new Error(this.message)).stack;
    this.toString = () => `${this.name}: ${this.message}`;
}

EDMException.prototype = Object.create(Error.prototype);
EDMException.prototype.name = 'EDM Exception';
EDMException.prototype.constructor = EDMException;

module.exports = EDMException;
