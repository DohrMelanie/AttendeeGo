import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FestivalCardComponent } from "../festival-card/festival-card.component";

export type Festival = {
  name: string,
  description: string,
  ort: string,
  startDate: string,
  endDate: string,
  imageUrl: string
}

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, FestivalCardComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  festivals: Festival[] = [
    {
      name: 'Regex Rave',
      description: 'Best party ever asd asdasd ad das das dasd sa dfasd fsady daf gdwsf asf dsgas fdsgafdgas gsdasf gfsasfdgsdeasfgrwafsa',
      ort: 'Wels',
      startDate: '17.02.2025',
      endDate: '20.02.2025',
      imageUrl: '/assets/img/lilc.webp'
    }
  ]
}
