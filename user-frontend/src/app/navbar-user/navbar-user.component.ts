import { CommonModule } from '@angular/common';
import { Component, inject, Input, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-user.component.html',
})
export class NavbarUserComponent {
  activeTab = signal<string>(localStorage.getItem('activeTab') || 'user-start');
  protected router = inject(Router);

  navigateTo(path: string) {
    this.activeTab.set(path);
    localStorage.setItem('activeTab', path);
    this.router.navigate(['/' + path]);
  }
}
