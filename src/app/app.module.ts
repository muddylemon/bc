import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { FeedsService } from './services/feeds.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    DashboardModule,
  ],
  providers: [
    FeedsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
