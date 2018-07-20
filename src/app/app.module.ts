import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from "./app.routing";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuildingComponent } from './building/building.component';
import { FinancialComponent } from './financial/financial.component';
import { LeviesComponent } from './levies/levies.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FaqsComponent } from './faqs/faqs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    BuildingComponent,
    FinancialComponent,
    LeviesComponent,
    CalendarComponent,
    FaqsComponent
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
