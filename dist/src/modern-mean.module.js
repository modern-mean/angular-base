import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModernMeanComponent } from './modern-mean.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { NavigationService } from './side-navigation/navigation.service';
import { RouterModule } from '@angular/router';
import { AllRoutes } from './modern-mean.routes';
import { MaterialModule } from '@angular/material';
import { NavigationListComponent } from './navigation-list/navigation-list.component';
import { NavigationRoutePipe } from './navigation-list/navigation-route.pipe';
import { NavigationRoutesPipe } from './navigation-list/navigation-routes.pipe';
export var ModernMeanModule = (function () {
    function ModernMeanModule() {
    }
    ModernMeanModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, MaterialModule.forRoot(), RouterModule.forRoot(AllRoutes)],
                    declarations: [ModernMeanComponent, HeaderComponent, FooterComponent, HomeComponent, TestComponent, NavigationListComponent, NavigationRoutesPipe, NavigationRoutePipe, NavigationRoutePipe, NavigationRoutesPipe],
                    exports: [HeaderComponent, FooterComponent, ModernMeanComponent],
                    providers: [NavigationService]
                },] },
    ];
    /** @nocollapse */
    ModernMeanModule.ctorParameters = function () { return []; };
    return ModernMeanModule;
}());
