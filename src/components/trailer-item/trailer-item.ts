import { Component, Input, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  @Input()
  trailer: any;

  constructor(public navCtrl: NavController) {}

  openDetailPage(event, trailer) {
    this.navCtrl.push(TrailerPage, {trailer: this.trailer});
  }

}
