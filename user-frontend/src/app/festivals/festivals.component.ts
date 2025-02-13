import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarUserComponent } from '../navbar-user/navbar-user.component';

@Component({
  selector: 'app-festivals',
  standalone: true,
  imports: [RouterLink, NavbarUserComponent],
  templateUrl: './festivals.component.html',
})
export class FestivalsComponent {
  constructor() {
    localStorage.clear();
  }
}
