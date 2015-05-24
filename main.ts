/// <reference path="typings/angular2/angular2.d.ts" />

import {bootstrap, Component, View, For, If} from 'angular2/angular2';

@Component({
    selector: 'my-app'
})

@View({
    templateUrl: 'friends.html',
    directives: [For, If]
})

class MyAppComponent {
    name: string;
    friends: Array<string>;

    constructor() {
        this.name = 'Gavin';
        this.friends = [];
    }

    addFriend($event) {
        if ($event.which === 13) {
            this.friends.push($event.target.value);
            $event.target.value = null;
        }
    }
}


bootstrap(MyAppComponent);
