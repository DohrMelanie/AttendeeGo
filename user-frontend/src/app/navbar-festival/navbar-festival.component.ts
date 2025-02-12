import { CommonModule } from '@angular/common';
import { Component, inject, Input, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-festival',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-festival.component.html',
  styleUrl: './navbar-festival.component.css'
})
export class NavbarFestivalComponent {
  activeTab = signal<string>('home');
  protected router = inject(Router);
  @Input({ required: true }) mode!: string;

  constructor() {}

  navigateTo(path: string) {
    this.activeTab.set(path);
    this.router.navigate(['/' + path]);
  }
}
