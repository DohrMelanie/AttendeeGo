import { Component, OnInit, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FestivalCardComponent } from "../festival-card/festival-card.component";
import { Festival, FestivalService } from '../festival.service';


@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, FestivalCardComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnInit{
  festivals = signal<Festival[]>([]);

  constructor(private festivalService:FestivalService){}

  async ngOnInit(){
    this.festivals.set(await this.festivalService.getAllFestivals());
  }
}