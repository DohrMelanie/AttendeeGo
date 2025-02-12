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
  activeTab = signal<string>(localStorage.getItem('activeTab') || 'start-festival');  protected router = inject(Router);
  navigateTo(path: string) {
    this.activeTab.set(path);
    localStorage.setItem('activeTab', path);
    this.router.navigate(['/' + path]);
  }
}
