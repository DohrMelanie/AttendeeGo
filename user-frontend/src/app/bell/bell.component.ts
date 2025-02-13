import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bell',
  standalone: true,
  imports: [],
  templateUrl: './bell.component.html',
})
export class BellComponent {
  protected router = inject(Router);
  navigateTo(path: string) {
    this.router.navigate(['/' + path]);
  }
}
