import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  //Podemos agregar las divisiiones que tendra la grafica
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'];
  //Valores que tendra cada division
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 150]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  //Debemos de definir un arreglo de colores que se aplicaran al backgroun color 
  public colors: Color[] = [
    {
      backgroundColor: [
        '#0075ED',
        '#00BAF7',
        '#00E0DB',
        '#00F7AD',
        '#00ED63',
      ]
    }
  ]

}
