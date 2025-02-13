import { Component, inject } from '@angular/core';
import { NavbarUserComponent } from '../navbar-user/navbar-user.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-start',
  standalone: true,
  imports: [NavbarUserComponent, FormsModule],
  templateUrl: './user-start.component.html',
})
export class UserStartComponent {
  protected router = inject(Router);
  toggleFavorite(artist: any) {
    artist.favorite = !artist.favorite;
  }

  searchTerm: string = '';
  get filteredArtists() {
    return this.artists.filter(a =>
      a.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
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
    { name: "Lil C", image: "artists/lilc.png", favorite: true },
  ];

}
