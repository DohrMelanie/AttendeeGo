import { NavbarFestivalComponent } from '../navbar-festival/navbar-festival.component';
import { Component } from '@angular/core';
import { BellComponent } from '../bell/bell.component';
import { BackComponent } from '../back/back.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [
    NavbarFestivalComponent,
    BellComponent,
    BackComponent,
    MatSlideToggleModule,
    MatCardModule,
  ],
  templateUrl: './map.component.html',
})
export class MapComponent {
  constructor() {}
}
