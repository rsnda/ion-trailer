import { Component, OnInit } from '@angular/core';

import {ApiProvider} from '../../providers/api/api';

/**
 * Generated class for the TrailerListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'trailer-list',
  templateUrl: 'trailer-list.html'
})
export class TrailerListComponent implements OnInit{

  trailers: any;

  constructor(private api:ApiProvider) {}

  ngOnInit() {
    this.api.getTrailers()
      .subscribe(
        trailers => {
          console.log('Trailers', trailers);
          this.trailers = trailers.json();
        },
        error => console.log('Error Http', error)
      );
  }

}