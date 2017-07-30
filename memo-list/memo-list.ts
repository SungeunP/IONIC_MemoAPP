import { MemoCreatePage } from './../memo-create/memo-create';
import { MemoDetailPage } from './../memo-detail/memo-detail';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * Generated class for the MemoListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-memo-list',
  templateUrl: 'memo-list.html',
})
export class MemoListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemoListPage');
  }

  onClickViewMemoDetail(){
    this.navCtrl.push(MemoDetailPage);
  }

  onClickCreateMemo(){
    this.navCtrl.push(MemoCreatePage);
  }

}
