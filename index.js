const fs = require('fs');
const path = require('path');
const { StringDecoder } = require('string_decoder');
const ejs = require('ejs');

const decoder = new StringDecoder('utf8');

const transmuteEjs = options => (file, done) => {
  const { use } = options;
  const { content, data, ext } = file;
  if (ext === '.html' && data.layout) {
    const template = fs.readFileSync(path.join(use, data.layout));
    const templateString = decoder.write(template);
    const transmuted = ejs.render(templateString, { content, data }, {
      root: path.resolve(process.cwd(), use),
    });
    return done({ content: transmuted });
  }
  return done();
};

module.exports = transmuteEjs;
