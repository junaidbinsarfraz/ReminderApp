import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Customer } from '../../models/customer';

@Component({
  selector: 'page-about',
  templateUrl: 'ccexpire.html'
})
export class CcExpirePage {

  public customersCcExpired: Customer[] = [];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public events: Events, public storage: Storage) {

    this.updateLists();

    this.events.subscribe('customerListUpdated', () => {
      this.updateLists();
      console.log("CcExpirePage");
    });

  }

  updateLists() {
    this.storage.get('customers').then((val) => {
      if (val) {

        val.forEach(customer => {

          if (customer.methodOfPayment == "Debit/ Credit Card" && !customer.cardRenewed) {

            // Populate each customers' list w.r.t. respective payment due dates
            var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds 

            var dummyDate = new Date("1/" + customer.ccExpire);
            var ccExpireDateLastDay = new Date(dummyDate.getFullYear(), dummyDate.getMonth() - 1, 0);
            
            var diffDays = Math.round(Math.abs((ccExpireDateLastDay.getTime() - new Date().getTime()) / (oneDay)));

            if (diffDays < 30) {
              this.customersCcExpired.push(customer);
            }
          }
        });

      } else {
        this.customersCcExpired = [];
      }

      this.storage.set("ccExpireEventCount", this.customersCcExpired.length);

      this.events.publish("updateTabs");
    });
  }

  showConfirm(selectedCustomer: Customer) {
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
