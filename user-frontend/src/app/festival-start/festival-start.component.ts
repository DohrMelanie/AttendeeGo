import { Component, inject } from '@angular/core';
import { NavbarFestivalComponent } from '../navbar-festival/navbar-festival.component';
import { Router } from '@angular/router';
import { BellComponent } from '../bell/bell.component';

@Component({
  selector: 'app-festival-start',
  standalone: true,
  imports: [NavbarFestivalComponent, BellComponent ],
  templateUrl: './festival-start.component.html',
})
export class FestivalStartComponent {
  protected router = inject(Router);

  artists = [
    { name: 'LIL C', image: 'artistsFestival/lilc.png' },
    { name: 'ASAP ROCKY', image: 'artistsFestival/rocky.png' },
    { name: 'FUTURE', image: 'artistsFestival/future.png' },
    { name: 'PESO PLUMA', image: 'artistsFestival/peso.png' },
    { name: 'PLAYBOI CARTI', image: 'artistsFestival/carti.png' },
  ];

  back() {
    this.router.navigate(['/']);
  }
}
