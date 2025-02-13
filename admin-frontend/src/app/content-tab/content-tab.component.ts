import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LineupManagementComponent } from "../lineup-management/lineup-management.component";

@Component({
  selector: 'app-content-tab',
  standalone: true,
  imports: [LineupManagementComponent],
  templateUrl: './content-tab.component.html',
  styleUrl: './content-tab.component.css'
})
export class ContentTabComponent {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log(id);
  }
}
