import { Component } from '@angular/core';
import { route } from '../modern-mean.animations';
export var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-home',
                    templateUrl: './home.component.html',
                    styleUrls: ['./home.component.css'],
                    styles: [':host { width: 100%; display: block; position: absolute; }'],
                    host: { '[@routeAnimation]': 'true' },
                    animations: [route()]
                },] },
    ];
    /** @nocollapse */
    HomeComponent.ctorParameters = function () { return []; };
    return HomeComponent;
}());
