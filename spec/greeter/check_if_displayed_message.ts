import { Scroll, See, Task, Text } from 'serenity-js/lib/screenplay-protractor';

import { GreeterWidget } from './ui/greeter_widget';

import chai = require('chai');
import chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

export const CheckIfDisplayedMessage = {

    reads: (expectedMessage: string) => Task.where(`{0} checks if the Greeter message reads "${expectedMessage}"`,
        Scroll.to(GreeterWidget.Message),
        See.if(Text.of(GreeterWidget.Message), equals(expectedMessage)),
    ),
}

// assertions

const expect = chai.expect;

export const equals = (expected: string) => (actual: PromiseLike<string>) => expect(actual).to.eventually.equal(expected)
