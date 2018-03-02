import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsComponent } from './news/news.component';
import { ExchangesComponent } from './exchanges/exchanges.component';
import { MarketsComponent } from './cards/markets/markets.component';
import { DailyPerformanceComponent } from './cards/daily-performance/daily-performance.component';
import { TradingVolumeComponent } from './cards/trading-volume/trading-volume.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    NewsComponent,
    ExchangesComponent,
    MarketsComponent,
    DailyPerformanceComponent,
    TradingVolumeComponent
  ],
  exports: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    NewsComponent,
    ExchangesComponent,
    MarketsComponent,
    DailyPerformanceComponent,
    TradingVolumeComponent
  ]
})
export class DashboardModule { }
