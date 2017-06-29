import { Component, Input } from '@angular/core';

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

  constructor() {}

}
