import { Component } from '@angular/core';
import { NavbarFestivalComponent } from '../navbar-festival/navbar-festival.component';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [NavbarFestivalComponent],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {

}
