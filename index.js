const mdf       = require('markdown-it-fence');
const nomnoml   = require('nomnoml');

const render = function(options) {
    return function(tokens, idx, _options, env) {
        const token = tokens[idx];
        let html_svg;
        try {
            html_svg = nomnoml.renderSvg(token.content);
        }
        catch(err) {
            html_svg = '<pre><code class="language-nomnoml">\n' +
                        token.content + '\n' +
                        '</code></pre>';
        }
        
        return html_svg;
    }
}

module.exports = function(md, options) {
    return mdf(md, 'nomnoml', {
        marker: '`',
        render: render(options)
    });
}