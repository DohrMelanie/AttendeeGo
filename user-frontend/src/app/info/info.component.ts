import { Component } from '@angular/core';
import { NavbarUserComponent } from "../navbar-user/navbar-user.component";

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [NavbarUserComponent],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

}
