import { expect } from './expect';

export const equals = (expected: string) => (actual: PromiseLike<string>) => expect(actual).to.eventually.equal(expected);
