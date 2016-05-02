var sass = require('node-sass'),
    fs   = require('fs');

var result = sass.renderSync({
  file: './style.sass',
  outFile: './style.css',
  sourceMap: true,
});

fs.writeFile("./style.css", result.css);
