import { Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { FestivalStartComponent } from './festival-start/festival-start.component';
import { UserStartComponent } from './user-start/user-start.component';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { NavbarFestivalComponent } from './navbar-festival/navbar-festival.component';
import { MapComponent } from './map/map.component';
import { InfoComponent } from './info/info.component';

export const routes: Routes = [
  { path: '', redirectTo: '/start-page', pathMatch: 'full' },
  { path: 'start-page', component: StartPageComponent },
  { path: 'festival-start', component: FestivalStartComponent },
  { path: 'user-start', component: UserStartComponent },
  { path: 'navbar-user', component: NavbarUserComponent },
  { path: 'navbar-festival', component: NavbarFestivalComponent },
  { path: 'map', component: MapComponent },
  { path: 'info', component: InfoComponent }
];
