
const transmuteEjs = require('./index');

describe('transmuteEjs', () => {
  it('calls done with arguments', () => {
    const done = jest.fn();
    const transmuter = transmuteEjs({ use: './' });
    const file = {
      content: '<h1 id="hello-world">Hello World</h1>',
      data: {
        layout: 'default.ejs',
      },
      ext: '.html',
    };
    transmuter(file, done);
    expect(done).toBeCalledWith({
      content: '<div><h1 id="hello-world">Hello World</h1></div>',
    });
  });

  it('calls done without arguments', () => {
    const done = jest.fn();
    const file = { ext: '.js' };
    const transmuter = transmuteEjs({ use: './' });
    transmuter(file, done);
    expect(done).toBeCalledWith();
  });
});
