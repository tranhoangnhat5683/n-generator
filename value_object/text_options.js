var Options = function (options) {
    this.options = options || {};
};
module.exports = Options;

Options.prototype.getSentenceCount = function () {
    return this.options.sentenceCount || 1;
};