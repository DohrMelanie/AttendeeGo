import { Component } from '@angular/core';
import { NavbarUserComponent } from '../navbar-user/navbar-user.component';

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [NavbarUserComponent],
  templateUrl: './friends.component.html',
  styleUrl: './friends.component.css'
})
export class FriendsComponent {

}
