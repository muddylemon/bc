import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { FeedsService } from '../../services/feeds.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  chartColor = '#FFFFFF';
  feeds = [];

  @ViewChild('priceChart') chart;


  constructor(private feedsService: FeedsService) { }

  ngAfterViewInit() {

    this.feeds = this.feedsService.getBitcoinHistory();
      console.log(this.feeds);

    const ctx = this.chart.nativeElement.getContext('2d');

    const gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
          gradientStroke.addColorStop(0, '#80b6f4');
          gradientStroke.addColorStop(1, this.chartColor);

    const gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
          gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
          gradientFill.addColorStop(1, 'rgba(255, 255, 255, 0.24)');

    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.feeds.map(p => p.Date),
        datasets: [{
          label: 'Price',
          borderColor: this.chartColor,
          pointBorderColor: this.chartColor,
          pointBackgroundColor: '#1e3d60',
          pointHoverBackgroundColor: '#1e3d60',
          pointHoverBorderColor: this.chartColor,
          pointBorderWidth: 0,
          pointHoverRadius: 3,
          pointHoverBorderWidth: 2,
          pointRadius: 2,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 1,
          data: this.feeds.map(p => p.Close)
        }]
      },
      options: {
        layout: {
          padding: {
            left: 20,
            right: 20,
            top: 0,
            bottom: 0
          }
        },
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: '#fff',
          titleFontColor: '#333',
          bodyFontColor: '#666',
          bodySpacing: 4,
          xPadding: 12,
          mode: 'nearest',
          intersect: 0,
          position: 'nearest'
        },
        legend: {
          position: 'bottom',
          fillStyle: '#FFF',
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              fontColor: 'rgba(255,255,255,0.4)',
              fontStyle: 'bold',
              maxTicksLimit: 100,
              padding: 1
            },
            gridLines: {
              drawTicks: true,
              drawBorder: false,
              display: true,
              color: 'rgba(255,255,255,0.1)',
              zeroLineColor: 'transparent'
            }

          }],
          xAxes: [{
            gridLines: {
              zeroLineColor: 'transparent',
              display: false,

            },
            ticks: {
              padding: 1,
              fontColor: 'rgba(255,255,255,0.4)',
              fontStyle: 'bold'
            }
          }]
        }
      }
    });

  }

}
