import { Component, OnInit } from '@angular/core';
import { route } from '../modern-mean.animations';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  styles: [':host { width: 100%; display: block; position: absolute; }'],
  host: { '[@routeAnimation]': 'true' },
  animations: [route()]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
