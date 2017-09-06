const mdf       = require('markdown-it-fence');
const nomnoml   = require('nomnoml');

const render = function(options) {
    return function(tokens, idx, _options, env) {
        const token = tokens[idx];
        return nomnoml.renderSvg(token.content);
    }
}

module.exports = function(md, options) {
    return mdf(md, 'nomnoml', {
        marker: '`',
        render: render(options)
    });
}