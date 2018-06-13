import { serenity } from 'serenity-js';
import { Actors } from '../../test/Actors';

export = function() {
    this.World = function() {
        this.stage = serenity.callToStageFor(new Actors());
    };
};
