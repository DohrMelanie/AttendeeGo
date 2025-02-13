import { Component } from '@angular/core';
import { NavbarFestivalComponent } from '../navbar-festival/navbar-festival.component';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [NavbarFestivalComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {

}
