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
      description: 'Best party ever asd asdasd ad das das dasd sa dfasd fsady daf gdwsf asf dsgas fdsgafdgas gsdasf gfsasfdgsdeasfgrwafsa',
      ort: 'Wels',
      startDate: '17.02.2025',
      endDate: '20.02.2025',
      imageUrl: '/assets/img/lilc.webp'
    }
  ]

  public async getAllFestivals() : Promise<Festival[]> {
    return this.festivals;
  }

  public async getFestival(id: number) : Promise<Festival> {
    return this.festivals.find(i => i.id === id)!
  }
}
