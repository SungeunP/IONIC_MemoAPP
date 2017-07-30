import { SignIngPage } from './../sign-ing/sign-ing';
import { SignUpPage } from './../sign-up/sign-up';
import { MemoListPage } from './../memo-list/memo-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignInPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  emailAddress : string;
  password : string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  ngOnInit(){

  }
  onClickIrene(){
    window.location.href = "http://google.co.kr";
  }

  onChangeEmailAddress(event : any){
    this.emailAddress = event.target.value; 
  }

  onChangePassword(event : any){
    this.password = event.target.value;
  }

  onClickEmailLogIn(){
    this.navCtrl.push(SignIngPage);
  }

  onClickFacebookLogin(){
    window.location.href="https://www.facebook.com";
  }

  onClickSignUp(){
    this.navCtrl.push(SignUpPage);
  }
}
