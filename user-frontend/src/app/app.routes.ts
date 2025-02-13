import { Routes } from '@angular/router';
import { FestivalStartComponent } from './festival-start/festival-start.component';
import { UserStartComponent } from './user-start/user-start.component';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { NavbarFestivalComponent } from './navbar-festival/navbar-festival.component';
import { MapComponent } from './map/map.component';
import { InfoComponent } from './info/info.component';
import { SettingsComponent } from './settings/settings.component';
import { FriendsComponent } from './friends/friends.component';
import { FindFriendsComponent } from './find-friends/find-friends.component';
import { TimetableComponent } from './timetable/timetable.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { FestivalsComponent } from './festivals/festivals.component';

export const routes: Routes = [
  { path: '', redirectTo: '/festivals', pathMatch: 'full' },
  { path: 'festivals', component: FestivalsComponent },
  { path: 'festival-start', component: FestivalStartComponent },
  { path: 'user-start', component: UserStartComponent },
  { path: 'navbar-user', component: NavbarUserComponent },
  { path: 'navbar-festival', component: NavbarFestivalComponent },
  { path: 'map', component: MapComponent },
  { path: 'info', component: InfoComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'find-friends', component: FindFriendsComponent },
  { path: 'timetable', component: TimetableComponent },
  { path: 'notifications', component: NotificationsComponent }
];
