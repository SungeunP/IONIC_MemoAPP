import { MemoCreatePage } from './../memo-create/memo-create';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * Generated class for the MemoDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-memo-detail',
  templateUrl: 'memo-detail.html',
})
export class MemoDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemoDetailPage');
  }

  onOpenEditMemo(){
    this.navCtrl.push(MemoCreatePage);
  }

  onDeleteMemo(){
    this.navCtrl.pop();
  }

}
