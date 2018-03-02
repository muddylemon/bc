import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { MarketsComponent } from './cards/markets/markets.component';
import { DailyPerformanceComponent } from './cards/daily-performance/daily-performance.component';
import { ExchangesComponent } from './exchanges/exchanges.component';
import { FooterComponent } from './footer/footer.component';
import { TradingVolumeComponent } from './cards/trading-volume/trading-volume.component';
import { NewsComponent } from './news/news.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        NavbarComponent,
        HeaderComponent,
        MarketsComponent,
        DailyPerformanceComponent,
        ExchangesComponent,
        FooterComponent,
        TradingVolumeComponent,
        NewsComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
