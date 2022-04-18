import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { menuItems } from '@constants/menu';
import { MenuController } from '@ionic/angular';
import { IMenuItem } from '@models/menu.model';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  menuElements: IMenuItem[] = menuItems;
  constructor(private menu: MenuController, private router: Router) {}
  async toogleMenu() {
    await this.menu.toggle();
  }

  goToLink(menuItem: IMenuItem) {
    this.router.navigate([menuItem.path]);
    this.menu.close();
  }
}
