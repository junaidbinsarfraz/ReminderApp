import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'ccexpire.html'
})
export class CcExpirePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Renew',
      message: 'Has customer renewed the credit card?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Renewed',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}
