import { Component, signal } from '@angular/core';
import { NavbarUserComponent } from '../navbar-user/navbar-user.component';

@Component({
  selector: 'app-find-friends',
  standalone: true,
  imports: [NavbarUserComponent],
  templateUrl: './find-friends.component.html',
})
export class FindFriendsComponent {
  people = signal([
    {
      name: 'Lena',
      age: 22,
      image: 'tinder/person1.png',
      musicTaste: 'The Pretty Reckless',
      festivals: ['Novarock']
    },
    {
      name: 'Hannes',
      age: 24,
      image: 'tinder/person2.png',
      musicTaste: 'Arctic Monkeys',
      festivals: ['Rock am Ring']
    }
  ]);

  currentIndex = signal(0);

  swipeRight() {
    if (this.currentIndex() < this.people().length - 1) {
      this.currentIndex.set(this.currentIndex() + 1);
    }
  }

  swipeLeft() {
    if (this.currentIndex() < this.people().length - 1) {
      this.currentIndex.set(this.currentIndex() + 1);
    }
  }

  back() {
    if (this.currentIndex() - 1 >= 0) {
      this.currentIndex.set(this.currentIndex() - 1);
    }
  }
}
