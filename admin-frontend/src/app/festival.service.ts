import { Injectable } from '@angular/core';


export type Festival = {
  id: number,
  name: string,
  description: string,
  ort: string,
  startDate: string,
  endDate: string,
  imageUrl: string
}

@Injectable({
  providedIn: 'root'
})
export class FestivalService {
  constructor() { }

  festivals: Festival[] = [
    {
      id: 1,
      name: 'Regex Rave',
      description: 'Code meets chaos! Lil C headlines with Critical Stage-Overflow at "Lil C’s Terminal". Bass drops harder than a failed regex match—ready to debug the dance floor?',
      ort: 'Wels',
      startDate: '1.04.2025',
      endDate: '2.04.2025',
      imageUrl: '/assets/img/lilc.webp'
    },
    {
      id: 2,
      name: 'BitBash Festival',
      description: 'A festival where beats and bytes collide! Headlined at the "Infinite Loop Stage", expect nonstop energy and pure digital mayhem. Ready to crash the dancefloor?',
      ort: 'Edinburgh',
      startDate: '12.04.2025',
      endDate: '15.02.2025',
      imageUrl: '/assets/img/stage-overflow.webp'
    },
    {
      id: 2,
      name: 'Data-Drop Festival',
      description: 'Where music uploads straight to your soul! Located at SQL – the Synthesized Quality Legends Stage, expect high-speed beats, heavy bass queries, and no downtime. Ready to commit to the groove?',
      ort: 'Saudorf',
      startDate: '05.10.2025',
      endDate: '06.07.2025',
      imageUrl: '/assets/img/sql.webp'
    },
  ]

  public async getAllFestivals() : Promise<Festival[]> {
    return this.festivals;
  }

  public async getFestival(id: number) : Promise<Festival> {
    return this.festivals.find(i => i.id === id)!
  }
}