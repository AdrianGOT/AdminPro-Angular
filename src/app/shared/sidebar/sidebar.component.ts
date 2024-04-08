import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

interface SideBarOptions {
  text: string,
  path: string
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {

  profileOptions: SideBarOptions[] = [];
  menuItems: any[] = [];

  constructor(
    private sidebarService: SidebarService
  ){
    this.profileOptions = this.sidebarService.profileOptions;
    this.menuItems = this.sidebarService.menuItems;
  }


}
