import { Component, inject, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { Act, Day, TimetableService } from '../timetable.service';
import { ArtistPopupComponent } from '../artist-popup/artist-popup.component';

@Component({
  selector: 'app-lineup-management',
  standalone: true,
  imports: [MatExpansionModule, ArtistPopupComponent],
  templateUrl: './lineup-management.component.html',
  styleUrl: './lineup-management.component.css',
})
export class LineupManagementComponent {
  protected router = inject(Router);
  constructor(private timetableService: TimetableService) {}

  stages = signal<string[]>(['Stage 1', "Lil C's terminal", 'Stage 3']);

  artists = [
    { name: 'Led Zeppelin', image: 'artists/LedZeppelin.png', favorite: true },
    { name: 'AC / DC', image: 'artists/acdc.png', favorite: false },
    { name: 'Taylor Swift', image: 'artists/Swift.png', favorite: false },
    {
      name: 'Infant Annihilator',
      image: 'artists/infant.png',
      favorite: false,
    },
    { name: 'Kendrick Lamar', image: 'artists/kendrick.png', favorite: false },
    { name: 'Linkin Park', image: 'artists/linkin.png', favorite: false },
    { name: 'Billie Eilish', image: 'artists/billie.png', favorite: false },
    {
      name: 'Sabrina Carpenter',
      image: 'artists/sabrina.png',
      favorite: false,
    },
  ];

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

  selectedArtist: any = null;

  openPopup(artist: any) {
    this.selectedArtist = artist;
  }

  closePopup() {
    this.selectedArtist = null;
  }

  handleSave(event: { artist: any; startTime: string; endTime: string }) {
    console.log(
      `Saved time for ${event.artist.name}: ${event.startTime} - ${event.endTime}`
    );
    this.closePopup();
  }
}
