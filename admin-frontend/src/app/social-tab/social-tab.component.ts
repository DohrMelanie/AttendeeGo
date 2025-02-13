import { Component, signal } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-social-tab',
  standalone: true,
  imports: [MatSelectModule, FormsModule],
  templateUrl: './social-tab.component.html',
})
export class SocialTabComponent {
  categories = signal<string[]>(['General', 'Security', 'Weather', 'Event Updates']);
  adPlatforms = signal<string[]>(['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'Google']);

  selectedCategory = signal<string>('General');
  selectedPlatform = signal<string>('Facebook');
  priority = 50;
}
