var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
var NavigationService = (function () {
    function NavigationService() {
        this.leftnav = new ReplaySubject(1);
        this.rightnav = new ReplaySubject(1);
    }
    NavigationService.prototype.getLeftNav = function () {
        return this._leftnav;
    };
    NavigationService.prototype.getRightNav = function () {
        return this._rightnav;
    };
    NavigationService.prototype.setLeftNav = function (nav) {
        this._leftnav = nav;
    };
    NavigationService.prototype.setRightNav = function (nav) {
        this._rightnav = nav;
    };
    return NavigationService;
}());
NavigationService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], NavigationService);
export { NavigationService };
//# sourceMappingURL=/home/athroener/vscode/angular-base/side-navigation/navigation.service.js.map