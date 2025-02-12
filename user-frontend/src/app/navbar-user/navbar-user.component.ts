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
  activeTab = signal<string>('home');
  protected router = inject(Router);
  @Input({ required: true }) mode!: string;

  constructor() {}

  navigateTo(path: string) {
    this.activeTab.set(path);
    this.router.navigate(['/' + path]);
  }
}
