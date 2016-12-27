import { OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../side-navigation/navigation.service';
export interface HeaderConfigPartial {
    title?: string;
    titleShow?: boolean;
    leftButtonIcon?: string;
    leftButtonShow?: boolean;
    rightButtonIcon?: string;
    rightButtonShow?: boolean;
}
export interface HeaderConfig {
    title: string;
    titleShow: boolean;
    leftButtonIcon: string;
    leftButtonShow: boolean;
    rightButtonIcon: string;
    rightButtonShow: boolean;
}
export interface HeaderData {
    header: HeaderConfigPartial;
}
export declare class HeaderComponent implements OnInit {
    private route;
    private navigationService;
    onToggle: EventEmitter<string>;
    config: HeaderConfig;
    private _config;
    private _subscriptions;
    private _leftnav;
    private _rightnav;
    constructor(route: ActivatedRoute, navigationService: NavigationService);
    ngOnInit(): void;
    initNavigation(): void;
    defaults(): HeaderConfig;
    toggle(nav: string): void;
}
