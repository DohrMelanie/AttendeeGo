import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Festival } from '../overview/overview.component';

@Component({
  selector: 'app-festival-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './festival-card.component.html',
  styleUrl: './festival-card.component.css'
})
export class FestivalCardComponent {
  @Input()
  festival: Festival[] = []
}
