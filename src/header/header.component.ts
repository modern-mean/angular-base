import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable, Subject } from 'rxjs';
import { NavigationService } from '../side-navigation/navigation.service';
import { defaults, merge } from 'lodash';


export interface HeaderConfigPartial {
  title?: string,
  titleShow?: boolean,
  leftButtonIcon?: string,
  leftButtonShow?: boolean,
  rightButtonIcon?: string,
  rightButtonShow?: boolean
}

export interface HeaderConfig {
  title: string,
  titleShow: boolean,
  leftButtonIcon: string,
  leftButtonShow: boolean,
  rightButtonIcon: string,
  rightButtonShow: boolean
}

export interface HeaderData {
  header: HeaderConfigPartial
}


@Component({
  selector: 'modern-mean-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() onToggle = new EventEmitter<string>();
  @Input() config: HeaderConfig;

  private _config: HeaderConfig;
  private _subscriptions: Subscription[] = [];
  private _leftnav: MdSidenav;
  private _rightnav: MdSidenav;

  constructor(private route: ActivatedRoute, private navigationService: NavigationService) {}

  ngOnInit() {
    if (this.config) {
      this._config = this.config;
    } else {
      let sub = this.route
        .data
        .subscribe((data: HeaderData) => {
          this._config = Object.assign(this.defaults(), data.header);
        });
      this._subscriptions.push(sub);
    }

    this.initNavigation();


  }

  initNavigation() {
    let sub = this.navigationService
                  .leftnav
                  .subscribe((nav) => {
                    this._leftnav = nav;
                  });
    this._subscriptions.push(sub);

    sub = this.navigationService
                  .rightnav
                  .subscribe((nav) => {
                    this._rightnav = nav;
                  });
    this._subscriptions.push(sub);
  }

  defaults(): HeaderConfig {
    return {
      title: 'Temporary',
      titleShow: true,
      leftButtonShow: true,
      leftButtonIcon: 'menu',
      rightButtonIcon: 'more_vert',
      rightButtonShow: true
    }
  }

  toggle(nav: string) {
    this.onToggle.emit(nav);
  }

}
