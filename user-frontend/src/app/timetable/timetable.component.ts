import { Component, inject, signal } from '@angular/core';
import { TimetableService, Act, Day } from '../timetable.service';
import { NavbarFestivalComponent } from '../navbar-festival/navbar-festival.component';
import { BellComponent } from '../bell/bell.component';
import { Router } from '@angular/router';
import { BackComponent } from '../back/back.component';

@Component({
  selector: 'app-timetable',
  standalone: true,
  imports: [NavbarFestivalComponent, BellComponent, BackComponent],
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css'],
})
export class TimetableComponent {
  protected router = inject(Router);
  constructor(private timetableService: TimetableService) {}

  stages = signal<string[]>(['Stage 1', "Lil C's terminal", 'Stage 3']);

  days: Day[] = [
    { id: 'tag-1', month: 'Mai', day: '1', weekday: 'Do', active: false },
    { id: 'tag-2', month: 'Mai', day: '2', weekday: 'Fr', active: true },
    { id: 'tag-3', month: 'Mai', day: '3', weekday: 'Sa', active: false },
    { id: 'tag-4', month: 'Mai', day: '4', weekday: 'So', active: false },
  ];

  getActs(stage: string): Act[] {
    return this.timetableService.getAllActs(stage);
  }

  intervalsPerHour = 12;
  startHour = 10.5; // Start at 10 AM
  totalIntervals = (24 - this.startHour) * this.intervalsPerHour; // 14 hours * 12 intervals

  getIntervals(): number[] {
    const startInterval = this.startHour * this.intervalsPerHour; // 120
    return Array.from(
      { length: this.totalIntervals },
      (_, i) => startInterval + i
    );
  }

  getStartRow(act: Act): number {
    const hours = act.beginTime.getHours();
    const minutes = act.beginTime.getMinutes();
    return (
      (hours - this.startHour) * this.intervalsPerHour +
      Math.floor(minutes / 5) +
      1
    );
  }

  getRowSpan(act: Act): number {
    const durationMinutes =
      (act.endTime.getTime() - act.beginTime.getTime()) / 60000;
    return Math.ceil(durationMinutes / 5);
  }

  selectDay(id: string) {
    this.days.forEach((day) => (day.active = day.id === id));
  }
}
