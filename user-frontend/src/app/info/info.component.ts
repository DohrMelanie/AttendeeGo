import { Component } from '@angular/core';
import { NavbarFestivalComponent } from "../navbar-festival/navbar-festival.component";

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [NavbarFestivalComponent],
  templateUrl: './info.component.html',
})
export class InfoComponent {

}
