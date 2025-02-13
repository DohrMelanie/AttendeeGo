import { Component } from '@angular/core';
import { NavbarFestivalComponent } from "../navbar-festival/navbar-festival.component";
import { BackComponent } from "../back/back.component";

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [NavbarFestivalComponent, BackComponent],
  templateUrl: './info.component.html',
})
export class InfoComponent {

}
