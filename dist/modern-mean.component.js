var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { NavigationService } from './side-navigation/navigation.service';
import { Router } from '@angular/router';
//import { MediaChange, MediaMonitor } from '@angular/flex-layout';
var ModernMeanComponent = (function () {
    function ModernMeanComponent(router, navigationService, _changeDetectionRef /*, @Inject(MediaMonitor)  private _media*/) {
        this.router = router;
        this.navigationService = navigationService;
        this._changeDetectionRef = _changeDetectionRef; /*, @Inject(MediaMonitor)  private _media*/
        this._subscriptions = [];
        this._navOpened = true;
        this._navMode = 'side';
    }
    ModernMeanComponent.prototype.ngAfterViewInit = function () {
        this.navigationService.leftnav.next(this.leftnav);
        this.navigationService.rightnav.next(this.rightnav);
    };
    ModernMeanComponent.prototype.ngOnInit = function () {
        /*
        if(!this._media.isActive('gt-sm')) {
          this.navMode = 'over';
          this.navOpened = 'false';
        }
    
        this._mediaWatcher = this._media
          .observe('gt-sm')
          .subscribe((change: MediaChange) => {
            if (change.matches) {
              this.navMode = 'side';
              this.navOpened = 'true';
            } else {
              this.navMode = 'over';
              this.navOpened = 'false';
            }
    
          });
          */
    };
    ModernMeanComponent.prototype.ngOnDestroy = function () {
        this._subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    return ModernMeanComponent;
}());
__decorate([
    ViewChild('leftnav'),
    __metadata("design:type", MdSidenav)
], ModernMeanComponent.prototype, "leftnav", void 0);
__decorate([
    ViewChild('rightnav'),
    __metadata("design:type", MdSidenav)
], ModernMeanComponent.prototype, "rightnav", void 0);
ModernMeanComponent = __decorate([
    Component({
        selector: 'app-modern-mean',
        templateUrl: './modern-mean.component.html',
        styleUrls: ['./modern-mean.component.css']
    }),
    __metadata("design:paramtypes", [Router, NavigationService, ChangeDetectorRef /*, @Inject(MediaMonitor)  private _media*/])
], ModernMeanComponent);
export { ModernMeanComponent };
//# sourceMappingURL=/home/athroener/vscode/angular-base/modern-mean.component.js.map