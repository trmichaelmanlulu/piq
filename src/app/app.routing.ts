import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuildingComponent } from './building/building.component';
import { FinancialComponent } from './financial/financial.component';
import { LeviesComponent } from './levies/levies.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FaqsComponent } from './faqs/faqs.component';

const routes: Routes = [
	{ path: '', component : DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'building', component: BuildingComponent },
  { path: 'financial', component: FinancialComponent },
  { path: 'levies', component: LeviesComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'faqs', component: FaqsComponent }
];

export const routing = RouterModule.forRoot(routes);