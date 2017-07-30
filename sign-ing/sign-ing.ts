import { MemoListPage } from './../memo-list/memo-list';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * Generated class for the SignIngPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sign-ing',
  templateUrl: 'sign-ing.html',
})
export class SignIngPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignIngPage');
  }

  onClickSigningButton(){
    this.navCtrl.setRoot(MemoListPage);
  }


}
