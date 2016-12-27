import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
export var NavigationService = (function () {
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
    NavigationService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NavigationService.ctorParameters = function () { return []; };
    return NavigationService;
}());
