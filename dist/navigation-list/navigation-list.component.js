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
import { Router, RoutesRecognized } from '@angular/router';
import { slide } from '../modern-mean.animations';
var NavigationListComponent = (function () {
    function NavigationListComponent(router) {
        this.router = router;
        this._rootRoutes = [];
        this._subscriptions = [];
        this._parents = [];
        this._state = 'in';
    }
    NavigationListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._routes = this.router.config;
        this._rootRoutes = this.router.config;
        var sub = this.router
            .events
            .filter(function (x) { return x instanceof RoutesRecognized; })
            .do(function (data) { return console.log(data); })
            .subscribe(function (route) {
            _this._activeRoute = route.state.root.firstChild;
            if (_this._activeRoute.children.length > 0) {
                _this._state = 'void';
            }
        });
        this._subscriptions.push(sub);
    };
    NavigationListComponent.prototype.ngOnDestroy = function () {
        this._subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    NavigationListComponent.prototype.animationDone = function (event) {
        if (event.toState === 'void') {
            this._state = 'in';
        }
    };
    return NavigationListComponent;
}());
NavigationListComponent = __decorate([
    Component({
        selector: 'modern-mean-navigation-list',
        templateUrl: './navigation-list.component.html',
        styleUrls: ['./_navigation-list.component.scss'],
        animations: [
            slide()
        ]
    }),
    __metadata("design:paramtypes", [Router])
], NavigationListComponent);
export { NavigationListComponent };
//# sourceMappingURL=/home/athroener/vscode/angular-base/navigation-list/navigation-list.component.js.map