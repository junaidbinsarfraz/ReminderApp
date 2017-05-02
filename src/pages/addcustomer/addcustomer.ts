import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';

import { Customer } from './models/customer';


@Component({
  selector: 'page-addcustomer',
  templateUrl: 'addcustomer.html'
})

export class AddCustomerPage {
    customer = new Customer();
    isEditing:boolean = false;

    constructor(public navCtrl: NavController, public user: User) {}

    doSave() {

// TODO: Validate

// TODO: Save if validated

        this.navCtrl.pop();

    }

    doCancel() {
        this.navCtrl.pop();
    }

}