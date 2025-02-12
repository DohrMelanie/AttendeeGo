import { Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { FestivalStartComponent } from './festival-start/festival-start.component';
import { UserStartComponent } from './user-start/user-start.component';
import { TimetableComponent } from './timetable/timetable.component';

export const routes: Routes = [
  { path: '', redirectTo: '/start-page', pathMatch: 'full' },
  { path: 'start-page', component: StartPageComponent },
  { path: 'festival-start', component: FestivalStartComponent },
  { path: 'user-start', component: UserStartComponent },
  { path: 'timetable', component: TimetableComponent }
];
