import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {

  constructor(private userService: UserService){}

  logout(){
    console.log('pa fuer');

    this.userService.logoutUser();
  }

}
