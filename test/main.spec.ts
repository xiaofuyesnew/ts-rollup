import Main from '../src/main'

test('Version test', () => {
  const test = Main
  expect(test()).toBe('Version 1.0.0.')
})