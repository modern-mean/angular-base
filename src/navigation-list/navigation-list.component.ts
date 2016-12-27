import { Component, OnInit, OnDestroy, trigger, state, style, transition, animate, keyframes, AnimationTransitionEvent  } from '@angular/core';
import { Router, Routes, Route, RoutesRecognized, ActivatedRouteSnapshot  } from '@angular/router';
import { Subscription } from 'rxjs';
import { slide } from '../modern-mean.animations';

@Component({
  selector: 'modern-mean-navigation-list',
  templateUrl: './navigation-list.component.html',
  styleUrls: ['./_navigation-list.component.scss'],
  animations: [
    slide()
  ]
})
export class NavigationListComponent implements OnInit, OnDestroy {

  private _activeRoute: ActivatedRouteSnapshot;
  private _rootRoutes: Routes = [];
  private _subscriptions: Subscription[] = [];
  private _parents: Route[] = [];
  private _routes: Routes;
  private _state: string = 'in';

  constructor(private router: Router) { }

  ngOnInit() {
    this._routes = this.router.config;
    this._rootRoutes = this.router.config;
    let sub = this.router
                  .events
                  .filter(x => x instanceof RoutesRecognized)
                  .do((data: any) => console.log(data))
                  .subscribe((route: RoutesRecognized) => {
                    this._activeRoute = route.state.root.firstChild;
                    if (this._activeRoute.children.length > 0) {
                      this._state = 'void';
                    }
                  });
    this._subscriptions.push(sub);
  }

  ngOnDestroy() {
    this._subscriptions.forEach((sub) => sub.unsubscribe());
  }

  animationDone(event: AnimationTransitionEvent) {
    if(event.toState === 'void') {
      this._state = 'in';
    }
  }
}

export interface NavigationRoute extends Route {
  data: {
    navigation: {
      display: string
      order: number
    }
  }
}
