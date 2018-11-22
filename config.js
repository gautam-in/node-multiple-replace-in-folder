const {transformReplaceData} = require('./transformationLib');

function doTransformation(data, file) {
  return transformReplaceData(data, file);
}

module.exports = {
  transform: (readable, writable, file) => {
    //console.log(file.name);
    // read
    //   .pipe(write);
    let buffer = '';
    readable.on('data', chunk => {
      buffer += chunk;
    });
    readable.on('end', () => {
      writable.write(doTransformation(buffer, file));
      writable.end();
    });
  }
}