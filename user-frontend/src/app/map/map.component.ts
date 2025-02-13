import { NavbarFestivalComponent } from '../navbar-festival/navbar-festival.component';
import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [NavbarFestivalComponent],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent {  
  
}
