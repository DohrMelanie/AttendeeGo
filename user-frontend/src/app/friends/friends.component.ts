import { Component, signal } from '@angular/core';
import { NavbarUserComponent } from '../navbar-user/navbar-user.component';

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [NavbarUserComponent],
  templateUrl: './friends.component.html',
})
export class FriendsComponent {
  friendRequests = signal([
    { name: 'Sophia', accepted: false },
    { name: 'Liam', accepted: false },
  ]);

  messages = signal([
    { name: 'Hannah', message: 'Ja das wird hoffentlich so funktionieren', date: '03.02.25', avatar: 'friends/nopic.png' },
    { name: 'Tommy', message: 'laut ihm war das letztes Jahr ein Problem', date: '23.01.25', avatar: 'friends/girl1.png' },
    { name: 'Boris', message: 'viel spaß!', date: '09.01.25', avatar: 'friends/nopic.png' },
    { name: 'Paul', message: 'Danke', date: '28.12.24', avatar: 'friends/nopic.png' },
    { name: 'Leo', message: 'Fix Led Zeppelin', date: '21.12.24', avatar: 'friends/guy1.png' },
  ]);

  acceptRequest(index: number) {
    this.friendRequests.update(requests => requests.filter((_, i) => i !== index));
  }

  declineRequest(index: number) {
    this.friendRequests.update(requests => requests.filter((_, i) => i !== index));
  }
}
