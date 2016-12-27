import { MdSidenav } from '@angular/material';
import { ReplaySubject } from 'rxjs';
export declare class NavigationService {
    private _leftnav;
    private _rightnav;
    leftnav: ReplaySubject<MdSidenav>;
    rightnav: ReplaySubject<MdSidenav>;
    constructor();
    getLeftNav(): MdSidenav;
    getRightNav(): MdSidenav;
    setLeftNav(nav: MdSidenav): void;
    setRightNav(nav: MdSidenav): void;
}
