import { Component } from '@angular/core';
import { NavbarFestivalComponent } from "../navbar-festival/navbar-festival.component";

@Component({
  selector: 'app-festival-start',
  standalone: true,
  imports: [NavbarFestivalComponent],
  templateUrl: './festival-start.component.html',
  styleUrl: './festival-start.component.css'
})
export class FestivalStartComponent {

}
