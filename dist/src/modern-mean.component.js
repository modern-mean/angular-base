import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NavigationService } from './side-navigation/navigation.service';
import { Router } from '@angular/router';
//import { MediaChange, MediaMonitor } from '@angular/flex-layout';
export var ModernMeanComponent = (function () {
    function ModernMeanComponent(router, navigationService, _changeDetectionRef /*, @Inject(MediaMonitor)  private _media*/) {
        this.router = router;
        this.navigationService = navigationService;
        this._changeDetectionRef = _changeDetectionRef;
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
    ModernMeanComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-modern-mean',
                    templateUrl: './modern-mean.component.html',
                    styleUrls: ['./modern-mean.component.css']
                },] },
    ];
    /** @nocollapse */
    ModernMeanComponent.ctorParameters = function () { return [
        { type: Router, },
        { type: NavigationService, },
        { type: ChangeDetectorRef, },
    ]; };
    ModernMeanComponent.propDecorators = {
        'leftnav': [{ type: ViewChild, args: ['leftnav',] },],
        'rightnav': [{ type: ViewChild, args: ['rightnav',] },],
    };
    return ModernMeanComponent;
}());
