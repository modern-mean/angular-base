var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Pipe } from '@angular/core';
var NavigationRoutesPipe = (function () {
    function NavigationRoutesPipe() {
    }
    NavigationRoutesPipe.prototype.transform = function (routes, args) {
        return routes && routes.length > 0 ? routes.filter(function (route) { return (route.data && route.data.navigation); }) : [];
    };
    return NavigationRoutesPipe;
}());
NavigationRoutesPipe = __decorate([
    Pipe({
        name: 'navigationRoutes'
    }),
    __metadata("design:paramtypes", [])
], NavigationRoutesPipe);
export { NavigationRoutesPipe };
//# sourceMappingURL=/home/athroener/vscode/angular-base/navigation-list/navigation-routes.pipe.js.map