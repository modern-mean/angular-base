import { OnInit, OnDestroy, AnimationTransitionEvent } from '@angular/core';
import { Router, Route } from '@angular/router';
export declare class NavigationListComponent implements OnInit, OnDestroy {
    private router;
    private _activeRoute;
    private _rootRoutes;
    private _subscriptions;
    private _parents;
    private _routes;
    private _state;
    constructor(router: Router);
    ngOnInit(): void;
    ngOnDestroy(): void;
    animationDone(event: AnimationTransitionEvent): void;
}
export interface NavigationRoute extends Route {
    data: {
        navigation: {
            display: string;
            order: number;
        };
    };
}
