import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './start-page.component.html',
})
export class StartPageComponent {
  constructor() {
    localStorage.clear();
  }
}
