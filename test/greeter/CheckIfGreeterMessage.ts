import { Scroll, See, Task, Text } from 'serenity-js/lib/screenplay-protractor';

import { equals } from '../assertions';
import { GreeterWidget } from './ui/GreeterWidget';

export const CheckIfGreeterMessage = ({
    reads: (expectedMessage: string) => Task.where(`#actor checks if the Greeter message reads "${expectedMessage}"`,
        Scroll.to(GreeterWidget.Message),
        See.if(Text.of(GreeterWidget.Message), equals(expectedMessage)),
    ),
});
