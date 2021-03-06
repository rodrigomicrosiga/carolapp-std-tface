import { Component, Input, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() title = '';

  /**
   * Valid types
   *  - line
   *  - column
   *  - bar
   */
  @Input() type = 'line';

  /**
   * Example:
   * ['January', 'February', 'March']
   */
  @Input() categories = [];

  /**
   * Example:
   * [
   *  {data: [3, 4, 4.1, 3.5], label: 'Item 1'},
   *  {data: [4, 3, 2.1, 3.8], label: 'Item 2'}
   * ]
   */
  @Input() series = [];

  /**
   * Example:
   * ['orange', 'blue', '#F00']
   */
  @Input() colors = ['#FF817D', '#32C3D1', '#FFD357', '#8ADC6B', '#508CF4', '#7A7492', '#E2376D', '#00B4C4', '#D7C2B6', '#92F5CC'];

  @Input() height = '';

  @Input() legend = true;

  @Input() tooltip = false;

  @Input() tooltipPrefix = '';

  constructor() { }

  ngOnInit() {
  }

}
