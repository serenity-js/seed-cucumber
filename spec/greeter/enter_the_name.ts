import { Enter, Is, Scroll, Task, Wait } from 'serenity-js/lib/screenplay-protractor';
import { GreeterWidget } from './ui/greeter_widget';

export const EnterTheName = {
    of: (name: string) => Task.where(`{0} enters their name as ${name}`,
        Wait.until(GreeterWidget.Name_Field, Is.visible()),
        Scroll.to(GreeterWidget.Name_Field),
        Enter.theValue(name).into(GreeterWidget.Name_Field),
    ),
}
