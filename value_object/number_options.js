var Options = function (options) {
    this.options = options || {};
};
module.exports = Options;

Options.prototype.isFloat = function () {
    return this.options.isFloat || false;
};

Options.prototype.getMinValue = function () {
    return this.options.minValue || 0;
};

Options.prototype.getMaxValue = function () {
    return this.options.maxValue || 1000000;
};