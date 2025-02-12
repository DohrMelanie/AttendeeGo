import { Component, signal } from '@angular/core';
<<<<<<< HEAD
import { TimetableService, Act, Day } from '../timetable.service';

=======
import { NavbarFestivalComponent } from '../navbar-festival/navbar-festival.component';
>>>>>>> refs/remotes/origin/main

@Component({
  selector: 'app-timetable',
  standalone: true,
<<<<<<< HEAD
=======
  imports: [NavbarFestivalComponent],
>>>>>>> refs/remotes/origin/main
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent {
<<<<<<< HEAD
  constructor(private timetableService: TimetableService) {}

  stages = signal<string[]>(['Stage 1', 'Stage 2', 'Stage 3']);
  days: Day[] = [
    { id: "tag-1", label: "Tag 1", date: "4. Mai 2025", active: false },
    { id: "tag-2", label: "Tag 2", date: "5. Mai 2025", active: true },
    { id: "tag-3", label: "Tag 3", date: "6. Mai 2025", active: false },
    { id: "tag-4", label: "Tag 4", date: "7. Mai 2025", active: false },
  ];

  getActs(stage: string): Act[] {
    return this.timetableService.getAllActs(stage);
  }

  intervalsPerHour = 12;
  totalIntervals = 24 * this.intervalsPerHour;

  getIntervals(): number[] {
    return Array.from({ length: this.totalIntervals }, (_, i) => i);
  }

  getStartRow(act: Act): number {
    const hours = act.beginTime.getHours();
    const minutes = act.beginTime.getMinutes();
    return hours * this.intervalsPerHour + Math.floor(minutes / 5) + 1;
  }

  getRowSpan(act: Act): number {
    const durationMinutes = (act.endTime.getTime() - act.beginTime.getTime()) / 60000;
    return Math.ceil(durationMinutes / 5);
  }
  
  selectDay(id: string) {
    this.days.forEach((day) => (day.active = day.id === id));
  }
    
=======
>>>>>>> refs/remotes/origin/main
}
