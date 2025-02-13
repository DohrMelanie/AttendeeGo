import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-back',
  standalone: true,
  imports: [],
  templateUrl: './back.component.html',
  styleUrl: './back.component.css'
})
export class BackComponent {
  location = inject(Location);

  back() {
    this.location.back();
  }
}
