import { Pipe } from '@angular/core';
export var NavigationRoutePipe = (function () {
    function NavigationRoutePipe() {
    }
    NavigationRoutePipe.prototype.transform = function (value, args) {
        return null;
    };
    NavigationRoutePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'navigationRoute'
                },] },
    ];
    /** @nocollapse */
    NavigationRoutePipe.ctorParameters = function () { return []; };
    return NavigationRoutePipe;
}());
