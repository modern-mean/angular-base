import { Component } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { slide } from '../modern-mean.animations';
export var NavigationListComponent = (function () {
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
    NavigationListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'modern-mean-navigation-list',
                    templateUrl: './navigation-list.component.html',
                    styleUrls: ['./_navigation-list.component.scss'],
                    animations: [
                        slide()
                    ]
                },] },
    ];
    /** @nocollapse */
    NavigationListComponent.ctorParameters = function () { return [
        { type: Router, },
    ]; };
    return NavigationListComponent;
}());
