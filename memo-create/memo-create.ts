import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * Generated class for the MemoCreatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-memo-create',
  templateUrl: 'memo-create.html',
})
export class MemoCreatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  title: string;
  contents: string;

  onChangeTitle(event: KeyboardEvent) {
    this.title = event.target['value'];
  }

  onChangeContents(event: KeyboardEvent) {
    this.contents = event.target['value'];
  }

  onSaveMemo() {
    this.navCtrl.pop();

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MemoCreatePage');
  }

}
