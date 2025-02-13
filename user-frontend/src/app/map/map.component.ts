import { NavbarFestivalComponent } from '../navbar-festival/navbar-festival.component';
import { Component, AfterViewInit, inject } from '@angular/core';
import { BellComponent } from '../bell/bell.component';
import { Router } from '@angular/router';
import { BackComponent } from "../back/back.component";

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [NavbarFestivalComponent, BellComponent, BackComponent],
  templateUrl: './map.component.html'
})
export class MapComponent {
  protected router = inject(Router);

  constructor () {}
}
