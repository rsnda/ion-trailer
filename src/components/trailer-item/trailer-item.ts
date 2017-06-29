import { Component, Input, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';

import { TrailerPage } from '../../pages/trailer/trailer';
/**
 * Generated class for the TrailerItemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'trailer-item',
  templateUrl: 'trailer-item.html'
})
export class TrailerItemComponent {
  @ViewChild(Nav) nav: Nav;

  @Input()
  trailer: any;

  constructor() {}

  openDetailPage() {
    this.nav.setRoot(TrailerPage);
  }

}
