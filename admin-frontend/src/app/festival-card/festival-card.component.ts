import { Component, Inject, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';
import { Festival } from '../festival.service';

@Component({
  selector: 'app-festival-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './festival-card.component.html',
})
export class FestivalCardComponent {
  @Input()
  festival: Festival[] = []

  constructor(private router: Router){}

  navigate(id:number){
    this.router.navigateByUrl("/content/" + id);
  }
}
