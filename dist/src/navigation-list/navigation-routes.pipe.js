import { Pipe } from '@angular/core';
export var NavigationRoutesPipe = (function () {
    function NavigationRoutesPipe() {
    }
    NavigationRoutesPipe.prototype.transform = function (routes, args) {
        return routes && routes.length > 0 ? routes.filter(function (route) { return (route.data && route.data.navigation); }) : [];
    };
    NavigationRoutesPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'navigationRoutes'
                },] },
    ];
    /** @nocollapse */
    NavigationRoutesPipe.ctorParameters = function () { return []; };
    return NavigationRoutesPipe;
}());
