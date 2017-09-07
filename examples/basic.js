const md_nomnoml = require('../index.js');
const d3node     = require('d3-node');
const md         = require('markdown-it')();
const fs         = require('fs');

md.use(md_nomnoml);

fs.readFile('./examples/example.md', 'utf8', (err, data) => {
    if(err) throw err;
    fs.writeFile('./examples/basic.html', md.render(data, {d3node}), (err) => {
        if (err) throw err;
    });
});