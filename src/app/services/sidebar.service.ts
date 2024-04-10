import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  profileOptions:any[] = [
    { text: 'My Profile ', path: '' },
    { text: 'My Balance', path: '' },
    { text: 'Inbox',  path: '' },
    { text: 'Account Setting',  path: 'account-settings' },
    { text: 'Logout',  path: '/login' },
  ]

  menuItems = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      subMenu: [
        { title: 'Dashboard', path: '/' },
        { title: 'Progressbar', path: 'progress' },
        { title: 'grahps', path: 'graph-one' },
      ]

    }
  ]

}
