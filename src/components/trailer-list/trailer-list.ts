import { Component, OnInit } from '@angular/core';
import {sortBy} from 'lodash';
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

  trailers: any; // Contains the full list of movies

  constructor(private api:ApiProvider) {}

  ngOnInit() {
    // Get the json from the server
    this.api.getTrailers()
      .subscribe(
        trailers => { // In success
          console.log('Trailers', trailers);
          this.trailers = trailers.json(); // Storage of the json in local variable

          // Sort of the movies by title :
          this.trailers = sortBy(this.trailers,
            [function(o) {
              return o.title;
            }]);
        },
        error => console.log('Error Http', error)
      );
  }

}
