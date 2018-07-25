const assert = require('assert')

const pluginTester = require('babel-plugin-tester')

const myPlugin = (babel) => {
  const { types: t } = babel;
  
  return {
    name: "ast-transform", // not required
    visitor: {
      Identifier(path) {
        path.node.name = path.node.name.split('').reverse().join('');
      }
    }
  };
}


pluginTester({
  plugin: myPlugin,
  tests: {
    'changes this code': {
      code: 'var hello = "hi";',
      output: 'var hello = "hi";',
    }
  },
})

test('it shows diff', () => {
  assert.equal('hello\ngoodbye', 'hello', 'hmmm')
})