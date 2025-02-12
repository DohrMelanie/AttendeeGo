import { Component, inject } from '@angular/core';
import { NavbarFestivalComponent } from "../navbar-festival/navbar-festival.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-festival-start',
  standalone: true,
  imports: [NavbarFestivalComponent],
  templateUrl: './festival-start.component.html',
  styleUrl: './festival-start.component.css'
})
export class FestivalStartComponent {
  protected router = inject(Router);

  back() {
    this.router.navigate(['/']);
  }
}
