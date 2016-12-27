import { OnInit, OnDestroy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { NavigationService } from './side-navigation/navigation.service';
import { Router } from '@angular/router';
export declare class ModernMeanComponent implements OnInit, OnDestroy, AfterViewInit {
    private router;
    private navigationService;
    private _changeDetectionRef;
    private _subscriptions;
    private _navOpened;
    private _navMode;
    leftnav: MdSidenav;
    rightnav: MdSidenav;
    constructor(router: Router, navigationService: NavigationService, _changeDetectionRef: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
