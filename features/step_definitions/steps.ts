import { protractor } from 'protractor';
import { serenity } from 'serenity-js';
import { Actor, BrowseTheWeb, Open } from 'serenity-js/lib/screenplay-protractor';

import { CheckIfDisplayedMessage, EnterTheName } from '../../spec/greeter';

export = function steps() {

    this.setDefaultTimeout(30 * 1000);

    const stage = serenity.callToStageFor({
        actor: name => Actor.named(name).whoCan(BrowseTheWeb.using(protractor.browser)),
    });

    this.Given(/^(.*) introduces himself as (.*)$/, function(actor: string, name: string) {
        return stage.theActorCalled(actor).attemptsTo(
            Open.browserOn('https://www.angularjs.org/'),
            EnterTheName.of(name),
        );
    });

    this.Then(/^he should be greeted with "([^"]*)"$/, function(message) {
        return stage.theActorInTheSpotlight().attemptsTo(
            CheckIfDisplayedMessage.reads(message),
        );
    });
};
