import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, NavParams, Events } from 'ionic-angular';

import { Customer } from '../../models/customer';

@Component({
    selector: 'page-addcustomer',
    templateUrl: 'addcustomer.html'
})

export class AddCustomerPage {
    public customer = new Customer();
    public isEditing: boolean = false;
    public dueDate: string = new Date().toISOString();

    constructor(public navCtrl: NavController, public params: NavParams, public events: Events, public alertCtrl: AlertController) {
        this.isEditing = params.get("isEditing");
        this.customer = params.get("customer");
        if (this.isEditing) {
            this.dueDate = new Date(this.customer.dueDate).toISOString();
        }
    }

    doSave() {

        // TODO: Validate
        if (this.customer.methodOfPayment == "" || this.customer.paymentMode == "" || this.customer.policyNo == ""
            || this.customer.policyOwner == "" || this.customer.premium == "" || this.customer.proposedInsured == "") {

            let alert = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'All fields are required.',
                buttons: ['OK']
            });
            alert.present();

            return;
        }

        var selectedDate = new Date(this.dueDate);

        this.customer.dueDate = selectedDate.getMonth() + "/" + selectedDate.getDate() + "/" + selectedDate.getFullYear();
        
        this.events.publish('customerSaved', {
            customer: this.customer,
            isEditing: this.isEditing
        });
        this.navCtrl.pop();

    }

    doCancel() {
        this.navCtrl.pop();
    }

    someEvent(event) {
        console.log(event.target);
    }

}