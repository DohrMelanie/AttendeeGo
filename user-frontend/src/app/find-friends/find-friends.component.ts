import { Component } from '@angular/core';
import { NavbarUserComponent } from '../navbar-user/navbar-user.component';

@Component({
  selector: 'app-find-friends',
  standalone: true,
  imports: [NavbarUserComponent],
  templateUrl: './find-friends.component.html',
  styleUrl: './find-friends.component.css'
})
export class FindFriendsComponent {

}
