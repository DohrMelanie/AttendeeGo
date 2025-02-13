import { Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { ContentTabComponent } from './content-tab/content-tab.component';
import { SocialTabComponent } from './social-tab/social-tab.component';
import { StatisticTabComponent } from './statistic-tab/statistic-tab.component';

export const routes: Routes = [
    { pathMatch: 'full', path: '', component: OverviewComponent },
    { path: 'content/:id', component: ContentTabComponent },
    { path: 'social/:id', component: SocialTabComponent },
    { path: 'statistic/:id', component: StatisticTabComponent }
];