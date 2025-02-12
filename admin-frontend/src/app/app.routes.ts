import { Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { ContentTabComponent } from './content-tab/content-tab.component';

export const routes: Routes = [
    { pathMatch: 'full', path: '', component: OverviewComponent },
    { path: 'content/:id', component: ContentTabComponent }
];