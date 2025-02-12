import { CommonModule } from '@angular/common';
import { Component, inject, Input, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-user.component.html',
  styleUrl: './navbar-user.component.css'
})
export class NavbarUserComponent {
  activeTab = signal<string>(localStorage.getItem('activeTab') || 'start-festival');
  protected router = inject(Router);

  navigateTo(path: string) {
    this.activeTab.set(path);
    localStorage.setItem('activeTab', path);
    this.router.navigate(['/' + path]);
  }
}
