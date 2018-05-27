var faker = require('faker');
var Options = require('../value_object/text_options');

module.exports = function (options) {
    options = new Options(options);
    return faker.lorem.sentences(options.getSentenceCount());
};