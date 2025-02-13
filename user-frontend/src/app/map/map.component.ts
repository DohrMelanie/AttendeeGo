import { NavbarFestivalComponent } from '../navbar-festival/navbar-festival.component';
import { Component, AfterViewInit, inject } from '@angular/core';
import { BellComponent } from '../bell/bell.component';
import { routes } from '../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [NavbarFestivalComponent, BellComponent,],
  templateUrl: './map.component.html'
})
export class MapComponent {
  protected router = inject(Router);

  constructor () {}

  back() {
    this.router.navigate(['/']);
  }
}
