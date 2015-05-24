/// <reference path="typings/angular2/angular2.d.ts" />

import {bootstrap, Component, View} from 'angular2/angular2';

@Component({
    selector: 'my-app'
})

@View({
    templateUrl: 'helloworld.html'
})

class MyAppComponent {
    name: string;

    constructor() {
        this.name = name;
    }
}

bootstrap(MyAppComponent);
