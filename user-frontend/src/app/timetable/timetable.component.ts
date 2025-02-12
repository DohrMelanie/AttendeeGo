import { Component, signal } from '@angular/core';
import { NavbarFestivalComponent } from '../navbar-festival/navbar-festival.component';

@Component({
  selector: 'app-timetable',
  standalone: true,
  imports: [NavbarFestivalComponent],
  templateUrl: './timetable.component.html',
  styleUrl: './timetable.component.css'
})
export class TimetableComponent {
}
