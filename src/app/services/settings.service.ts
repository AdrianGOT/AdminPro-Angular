import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private themeLink = document.querySelector('#theme');
  private themeColorSelected: string  = '';
  private links!: any[] | NodeListOf<Element>;

  constructor() {
    this.setThemeColor();
  }

  changeTheme(themeColor: string, isDarkMode: boolean = false): void{
    const newThemeColor = isDarkMode? `${themeColor}-dark`: themeColor;
    const url = `./assets/css/colors/${newThemeColor}.css`;
    this.themeColorSelected = newThemeColor;

    localStorage.setItem( 'themeLink', url);
    this.setThemeColor(url);
    this.checkCurrentTheme();
  }

  private setThemeColor(url: string = ''){

    if(url){
      this.themeLink?.setAttribute('href', url);
      return;
    }

    const themeColor = localStorage.getItem('themeLink') || './assets/css/colors/default-dark.css';
    this.themeLink?.setAttribute('href', themeColor);
  }

  private checkCurrentTheme(): void{
    if(!this.links ) this.links = document.querySelectorAll('.selector');

    this.links?.forEach(elem =>  {
      if(elem.classList.contains(this.themeColorSelected + '-theme')) elem.classList.add('working');
      else elem.classList.remove('working');
    });
  }


}
