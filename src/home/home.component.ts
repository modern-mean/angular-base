import { Component, OnInit } from '@angular/core';
import { route } from '../modern-mean.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  styles: [':host { width: 100%; display: block; position: absolute; }'],
  host: { '[@routeAnimation]': 'true' },
  animations: [route()]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
