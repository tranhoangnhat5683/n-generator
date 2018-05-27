var Options = require('../value_object/number_options');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + parseFloat(min);
}

module.exports = function (options) {
    options = new Options(options);
    if (options.isFloat()) {
        return getRandomFloat(options.getMinValue(), options.getMaxValue());
    }

    return getRandomInt(options.getMinValue(), options.getMaxValue());
};