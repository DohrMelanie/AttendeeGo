import { Component, inject } from '@angular/core';
import { NavbarUserComponent } from '../navbar-user/navbar-user.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-start',
  standalone: true,
  imports: [NavbarUserComponent],
  templateUrl: './user-start.component.html',
  styleUrl: './user-start.component.css'
})
export class UserStartComponent {
  protected router = inject(Router);
  toggleFavorite(artist: any) {
    artist.favorite = !artist.favorite;
  }
  artists = [
    { name: "Led Zeppelin", image: "artists/LedZeppelin.png", favorite: true },
    { name: "AC / DC", image: "artists/acdc.png", favorite: false },
    { name: "Taylor Swift", image: "artists/Swift.png", favorite: false },
    { name: "Infant Annihilator", image: "artists/infant.png", favorite: false },
    { name: "Kendrick Lamar", image: "artists/kendrick.png", favorite: false },
    { name: "Linkin Park", image: "artists/linkin.png", favorite: false },
    { name: "Billie Eilish", image: "artists/billie.png", favorite: false },
    { name: "Sabrina Carpenter", image: "artists/sabrina.png", favorite: false },
  ];

  back() {
    this.router.navigate(['/']);
  }
}
