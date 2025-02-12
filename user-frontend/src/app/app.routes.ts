import { Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/start-page', pathMatch: 'full' },
  { path: 'start-page', component: StartPageComponent },
];
