import { joinHelloWorld } from '../src/joinHelloWorld';

test('concatenates to "hello world"', () => {
  expect(joinHelloWorld()).toBe('hello world');
});
