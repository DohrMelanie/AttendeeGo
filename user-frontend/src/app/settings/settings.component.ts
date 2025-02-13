import { Component } from '@angular/core';
import { NavbarUserComponent } from '../navbar-user/navbar-user.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [NavbarUserComponent],
  templateUrl: './settings.component.html',
})
export class SettingsComponent {

}
