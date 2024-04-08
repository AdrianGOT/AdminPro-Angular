import { Component } from '@angular/core';

@Component({
  selector: 'app-graph-one',
  templateUrl: './graph-one.component.html',
  styles: ``
})
export class GraphOneComponent {
  dataOne = [100, 50,25];
  labelsOne = ['May', 'June', 'July' ];

  dataTwo = [40, 100,305];
  labelsTwo = ['Sierra', 'Sofia', 'Lorayne' ];

  dataThree = [200, 60, 10];
  labelsThree = ['Code', 'Cura', 'lalo' ];

  dataFour = [12, 30, 67];
  labelsFour = ['Pan ', 'Frito', 'Arepa' ];



}
