import { AfterContentInit, AfterViewChecked, Component, DoCheck, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: ``
})
export class AccountSettingsComponent  {

  constructor(
    private settingsServices: SettingsService
  ){}

  themeColorList: string[] = [
    'default',
    'green',
    'red',
    'blue',
    'purple',
    'megna'
  ];

  changeTheme(themeColor: string, isDarkMode: boolean = false){
    this.settingsServices.changeTheme(themeColor, isDarkMode);
  }

  setClassToThemeColor( themeColor: string, isDarkeMode: boolean = false ): string{
    if(isDarkeMode) return `selector ${themeColor}-dark-theme`;
    return `selector ${themeColor}-theme`;
  }

  getNumberOfThemeColor(number: number, isDarkMode: boolean): number{
    return isDarkMode? 6 + number : number;
  }

}
