import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { NewsComponent } from './dashboard/news/news.component';
import { ExchangesComponent } from './dashboard/exchanges/exchanges.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { TradingVolumeComponent } from './dashboard/cards/trading-volume/trading-volume.component';
import { DailyPerformanceComponent } from './dashboard/cards/daily-performance/daily-performance.component';
import { MarketsComponent } from './dashboard/cards/markets/markets.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    HeaderComponent,
    NewsComponent,
    ExchangesComponent,
    FooterComponent,
    TradingVolumeComponent,
    DailyPerformanceComponent,
    MarketsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
