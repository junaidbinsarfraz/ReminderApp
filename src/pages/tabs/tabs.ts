import { Component } from '@angular/core';

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

  constructor() {

  }
}
