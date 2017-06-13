import { Target } from 'serenity-js/lib/screenplay-protractor';

import { by } from 'protractor';

export const GreeterWidget = {
    Name_Field: Target.the('Greeter name field').located(by.model('yourName')),
    Message:    Target.the('Greeter message').located(by.binding('yourName')),
};
