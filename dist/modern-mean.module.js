var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { ModernMeanComponent } from './modern-mean.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
//Services
import { NavigationService } from './side-navigation/navigation.service';
import { RouterModule } from '@angular/router';
import { AllRoutes } from './modern-mean.routes';
//Material Setup
import { MaterialModule } from '@angular/material';
import { NavigationListComponent } from './navigation-list/navigation-list.component';
import { NavigationRoutePipe } from './navigation-list/navigation-route.pipe';
import { NavigationRoutesPipe } from './navigation-list/navigation-routes.pipe';
var ModernMeanModule = (function () {
    function ModernMeanModule() {
    }
    return ModernMeanModule;
}());
ModernMeanModule = __decorate([
    NgModule({
        imports: [CommonModule, MaterialModule.forRoot(), RouterModule.forRoot(AllRoutes)],
        declarations: [ModernMeanComponent, HeaderComponent, FooterComponent, HomeComponent, TestComponent, NavigationListComponent, NavigationRoutesPipe, NavigationRoutePipe, NavigationRoutePipe, NavigationRoutesPipe],
        exports: [HeaderComponent, FooterComponent, ModernMeanComponent],
        providers: [NavigationService]
    }),
    __metadata("design:paramtypes", [])
], ModernMeanModule);
export { ModernMeanModule };
//# sourceMappingURL=/home/athroener/vscode/angular-base/modern-mean.module.js.map