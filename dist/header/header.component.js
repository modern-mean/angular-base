var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../side-navigation/navigation.service';
var HeaderComponent = (function () {
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
    return HeaderComponent;
}());
__decorate([
    Output(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "onToggle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "config", void 0);
HeaderComponent = __decorate([
    Component({
        selector: 'modern-mean-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css']
    }),
    __metadata("design:paramtypes", [ActivatedRoute, NavigationService])
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=/home/athroener/vscode/angular-base/header/header.component.js.map