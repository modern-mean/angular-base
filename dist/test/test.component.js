var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { route } from '../modern-mean.animations';
var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Component({
        selector: 'app-test',
        templateUrl: './test.component.html',
        styleUrls: ['./test.component.css'],
        styles: [':host { width: 100%; display: block; position: absolute; }'],
        host: { '[@routeAnimation]': 'true' },
        animations: [route()]
    }),
    __metadata("design:paramtypes", [])
], TestComponent);
export { TestComponent };
//# sourceMappingURL=/home/athroener/vscode/angular-base/test/test.component.js.map