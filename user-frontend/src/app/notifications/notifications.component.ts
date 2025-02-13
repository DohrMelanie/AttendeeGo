import { Component, inject } from '@angular/core';
import { NavbarFestivalComponent } from '../navbar-festival/navbar-festival.component';
import { Location } from '@angular/common';

interface Activity {
  profileImage?: string;
  username: string;
  text: string;
  timestamp: string;
  importance: number;
}

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [NavbarFestivalComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css',
})
export class NotificationsComponent {
  location = inject(Location);
  activities: Activity[] = [
    {
      username: 'Veranstalter',
      text: 'Wetterwarung! Bitte Regenschutz mitnehmen.',
      timestamp: '2/14',
      importance: 1,
    },
    {
      profileImage: 'friends/Friend3.jpg',
      username: 'Max',
      text: 'Hat deine Freundschaftsanfrage akzeptiert.',
      timestamp: '2/13',
      importance: 3,
    },
    {
      profileImage: 'artistsFestival/rocky.png',
      username: 'Verantstalter',
      text: 'Der Künstler ASAP ROCKY verspätet sich.',
      timestamp: '2/13',
      importance: 2,
    },
    {
      profileImage: 'artistsFestival/future.png',
      username: 'Veranstalter',
      text: 'Der Künstler Future wurde hinzugefügt.',
      timestamp: '1/28',
      importance: 2,
    },
    {
      profileImage: 'artistsFestival/peso.png',
      username: 'Veranstalter',
      text: 'Der Künstler PESO PLUMA wurde hinzugefügt.',
      timestamp: '1/28',
      importance: 2,
    },
    {
      profileImage: 'friends/Friend2.jpg',
      username: 'Lara',
      text: 'Hat deine Freundschaftsanfrage akzeptiert.',
      timestamp: '1/27',
      importance: 1,
    },
  ];
  back() {
    this.location.back();
  }
}
