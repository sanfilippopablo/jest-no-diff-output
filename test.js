const assert = require('assert')

test('it shows diff', () => {
  assert.equal('hello\ngoodbye', 'hello', 'hmmm')
})

test('it shows diff async', async () => {
  assert.equal('hello\ngoodbye', 'hello', 'hmmm')
})