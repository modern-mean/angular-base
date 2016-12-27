import { Component } from '@angular/core';
import { route } from '../modern-mean.animations';
export var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-test',
                    templateUrl: './test.component.html',
                    styleUrls: ['./test.component.css'],
                    styles: [':host { width: 100%; display: block; position: absolute; }'],
                    host: { '[@routeAnimation]': 'true' },
                    animations: [route()]
                },] },
    ];
    /** @nocollapse */
    TestComponent.ctorParameters = function () { return []; };
    return TestComponent;
}());
