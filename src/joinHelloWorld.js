import { HELLO } from './words/hello';
import { WORLD } from './words/world';

export function joinHelloWorld() {
  return `${HELLO} ${WORLD}`.trim();
}
