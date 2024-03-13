import { Component } from '@angular/core';
import { ChartsComponent } from '../../charts/charts.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartDetails } from '../../DTOs/chart.details';

@Component({
  selector: 'app-barchart',
  standalone: true,
  imports: [ChartsComponent, NgApexchartsModule],
  templateUrl: './barchart.component.html',
  styleUrl: './barchart.component.scss'
})
export class BarchartComponent {
  chart: ChartDetails = {
    title: 'Quantidade de atestados por mês',
    categories: ['Janeiro', 'Fevereiro', 'Março', 'Abril','Maio'],
    series: [
      {
        name: 'Média de Atestados',
        data: [2.4, 0.8, 2.6, 7.3, 2.5],
      },
    ],
  };
  
  series = [...this.chart.series];
  charts: any = {
    height: 400,
    type: 'line',
  };
  title: any = {
    text: this.chart.title,
  };
  xaxis: any = {
    categories: this.chart.categories,
  };


}
