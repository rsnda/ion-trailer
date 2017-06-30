import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TrailerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-trailer',
  templateUrl: 'trailer.html',
})
export class TrailerPage implements OnInit{

  trailer: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ngOnInit() {
    this.trailer = this.navParams.get('trailer');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrailerPage');

    console.log('TR = ' + this.trailer.title);
  }

}
