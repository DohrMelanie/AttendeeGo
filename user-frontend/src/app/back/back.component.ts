import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back',
  standalone: true,
  imports: [],
  templateUrl: './back.component.html',
  styleUrl: './back.component.css'
})
export class BackComponent {
  protected router = inject(Router);
  back() {
    this.router.navigate(['/']);
  }
}
