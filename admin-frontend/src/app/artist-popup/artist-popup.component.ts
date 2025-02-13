import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-artist-popup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './artist-popup.component.html',
})
export class ArtistPopupComponent {
  @Input() artist: any;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<{ artist: any; startTime: string; endTime: string }>();

  stage: string = '';
  startTime: string = '';
  endTime: string = '';

  saveTime() {
    if (this.startTime && this.endTime && this.stage) {
      this.save.emit({ artist: this.artist, startTime: this.startTime, endTime: this.endTime });
      this.close.emit();
    } else {
      alert('Please enter stage, start and end times.');
    }
  }
}
