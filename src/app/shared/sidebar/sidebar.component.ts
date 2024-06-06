import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { UserService } from '../../services/user.service';

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
    private sidebarService: SidebarService,
    private userService: UserService
  ){
    this.profileOptions = this.sidebarService.profileOptions;
    this.menuItems = this.sidebarService.menuItems;
  }


  logout(){
    this.userService.logoutUser();
  }

}
