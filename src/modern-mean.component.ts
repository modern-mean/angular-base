import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ChangeDetectorRef, AnimationTransitionEvent } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { Subscription } from 'rxjs';
import { NavigationService } from './side-navigation/navigation.service';
import { Router } from '@angular/router';


//import { MediaChange, MediaMonitor } from '@angular/flex-layout';

@Component({
  selector: 'app-modern-mean',
  templateUrl: './modern-mean.component.html',
  styleUrls: ['./modern-mean.component.css']
})
export class ModernMeanComponent implements OnInit, OnDestroy, AfterViewInit {

  private _subscriptions: Subscription[] = [];
  private _navOpened: boolean = true;
  private _navMode: string = 'side';

  @ViewChild('leftnav') leftnav: MdSidenav;
  @ViewChild('rightnav') rightnav: MdSidenav;


  constructor(private router: Router, private navigationService: NavigationService, private _changeDetectionRef : ChangeDetectorRef/*, @Inject(MediaMonitor)  private _media*/) {}

  ngAfterViewInit() {
    this.navigationService.leftnav.next(this.leftnav);
    this.navigationService.rightnav.next(this.rightnav);
  }

  ngOnInit() {



    /*
    if(!this._media.isActive('gt-sm')) {
      this.navMode = 'over';
      this.navOpened = 'false';
    }

    this._mediaWatcher = this._media
      .observe('gt-sm')
      .subscribe((change: MediaChange) => {
        if (change.matches) {
          this.navMode = 'side';
          this.navOpened = 'true';
        } else {
          this.navMode = 'over';
          this.navOpened = 'false';
        }

      });
      */
  }







  ngOnDestroy() {
    this._subscriptions.forEach(sub => sub.unsubscribe());
  }
}

