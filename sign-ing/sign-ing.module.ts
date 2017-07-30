import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignIngPage } from './sign-ing';

@NgModule({
  declarations: [
    SignIngPage,
  ],
  imports: [
    IonicPageModule.forChild(SignIngPage),
  ],
  exports: [
    SignIngPage
  ]
})
export class SignIngPageModule {}
