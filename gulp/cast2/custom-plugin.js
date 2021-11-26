const through2 = require('through2');

module.exports = (options) => {
  const stream = through2.obj((file, encoding, next) => {
    const data = {
      path: file.path,
      cwd: file.cwd,
      contents: file.contents.toString(),
    };
    console.log({ data });
    const response = {
      contents: Buffer.from('custom contents'),
      path: 'test path',
      cwd: 'test cwd',
    };
    next(null, response);
  });
  console.log({ options });
  return stream;
};
