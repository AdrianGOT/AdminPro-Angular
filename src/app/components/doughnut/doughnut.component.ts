import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: ``
})
export class DoughnutComponent implements OnInit{


  @Input('labels') doughnutChartLabels: string[] = [];
  @Input() data: number[] = [];
  @Input() title: string = 'Dounghnut Grahp';

  public : string[] = [ ];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true
  };

  ngOnInit(): void {
   this.doughnutChartDatasets = [{ data: this.data }];
  }




  // Doughnut
}
