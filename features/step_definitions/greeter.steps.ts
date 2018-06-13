import { Open } from 'serenity-js/lib/screenplay-protractor';

import { CheckIfGreeterMessage, EnterName } from '../../test/greeter';

export = function greeterSteps() {

    this.Given(/^(.*) wants to interact with AngularJS apps$/, function(actor: string) {
        return this.stage.theActorCalled(actor).attemptsTo(
            Open.browserOn('https://www.angularjs.org/'),
        );
    });

    this.When(/^(?:he|she|they) introduces? (?:himself|herself|themselves) as (.*)$/, function(name: string) {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            EnterName.of(name),
        );
    });

    this.Then(/^he should be greeted with "([^"]*)"$/, function(message: string) {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            CheckIfGreeterMessage.reads(message),
        );
    });
};
