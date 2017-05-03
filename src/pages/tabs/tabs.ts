import { Component } from '@angular/core';
import { Events } from 'ionic-angular';

import { CcExpirePage } from '../ccexpire/ccexpire';
import { CustomersPage } from '../customers/customers';
import { DashboardPage } from '../dashboard/dashboard';
import { SettingPage } from '../setting/setting';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DashboardPage;
  tab2Root = CcExpirePage;
  tab3Root = CustomersPage;
  tab4Root = SettingPage;

  public dashboardEventCount: number = 0;
  public ccExpireEventCount: number = 0;

  constructor(public events: Events) {

    if (this.dashboardEventCount == 0) {
      this.dashboardEventCount = null;
    }

    if (this.ccExpireEventCount == 0) {
      this.ccExpireEventCount = null;
    }

    // Subscribe with the dashboard and ccExpire update events
    this.events.subscribe('dashboardEventUpdated', () => {
      // Get updated value


      if (this.dashboardEventCount == 0) {
        this.dashboardEventCount = null;
      }
    })

    this.events.subscribe('ccExpireEventUpdated', () => {
      // Get updated value


      if (this.ccExpireEventCount == 0) {
        this.ccExpireEventCount = null;
      }
    })

  }
}
