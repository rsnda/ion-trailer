import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TrailerListComponent } from './trailer-list';

@NgModule({
  declarations: [
    TrailerListComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    TrailerListComponent
  ]
})
export class TrailerListComponentModule {}
