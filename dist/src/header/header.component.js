import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../side-navigation/navigation.service';
export var HeaderComponent = (function () {
    function HeaderComponent(route, navigationService) {
        this.route = route;
        this.navigationService = navigationService;
        this.onToggle = new EventEmitter();
        this._subscriptions = [];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.config) {
            this._config = this.config;
        }
        else {
            var sub = this.route
                .data
                .subscribe(function (data) {
                _this._config = Object.assign(_this.defaults(), data.header);
            });
            this._subscriptions.push(sub);
        }
        this.initNavigation();
    };
    HeaderComponent.prototype.initNavigation = function () {
        var _this = this;
        var sub = this.navigationService
            .leftnav
            .subscribe(function (nav) {
            _this._leftnav = nav;
        });
        this._subscriptions.push(sub);
        sub = this.navigationService
            .rightnav
            .subscribe(function (nav) {
            _this._rightnav = nav;
        });
        this._subscriptions.push(sub);
    };
    HeaderComponent.prototype.defaults = function () {
        return {
            title: 'Temporary',
            titleShow: true,
            leftButtonShow: true,
            leftButtonIcon: 'menu',
            rightButtonIcon: 'more_vert',
            rightButtonShow: true
        };
    };
    HeaderComponent.prototype.toggle = function (nav) {
        this.onToggle.emit(nav);
    };
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'modern-mean-header',
                    templateUrl: './header.component.html',
                    styleUrls: ['./header.component.css']
                },] },
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = function () { return [
        { type: ActivatedRoute, },
        { type: NavigationService, },
    ]; };
    HeaderComponent.propDecorators = {
        'onToggle': [{ type: Output },],
        'config': [{ type: Input },],
    };
    return HeaderComponent;
}());
