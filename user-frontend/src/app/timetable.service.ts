import { Injectable } from '@angular/core';

export type Act = {
  name: string;
  beginTime: Date;
  endTime: Date;
  friends?: string[];
};

export type Day = {
  id: string;
  month: string;
  day: string;
  weekday: string;
  active: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class TimetableService {
  getAllActs(stage: string): Act[] {
    console.log('Getting acts for stage', stage);
    if (stage === 'Stage 1') {
      return [
        {
          name: 'Spiritbox',
          beginTime: new Date('2023-10-01T11:50:00'),
          endTime: new Date('2023-10-01T13:00:00'),
          friends: ['friends/Friend2.jpg', 'friends/nopic.png',  'friends/Friend1.jpg'],
        },
        {
          name: 'To the Grave',
          beginTime: new Date('2023-10-01T13:35:00'),
          endTime: new Date('2023-10-01T14:30:00'),
        },
        {
          name: 'Whitechapel',
          beginTime: new Date('2023-10-01T16:00:00'),
          endTime: new Date('2023-10-01T16:30:00'),
        },
        {
          name: 'Ghostkid',
          beginTime: new Date('2023-10-01T17:00:00'),
          endTime: new Date('2023-10-01T19:00:00'),
        },
        {
          name: 'Within Destruction',
          beginTime: new Date('2023-10-01T20:30:00'),
          endTime: new Date('2023-10-01T22:00:00'),
          friends: ['friends/Friend1.jpg', 'friends/Friend4.jpg', 'friends/Friend3.jpg'],
        },
        {
          name: 'Shadow of Intent',
          beginTime: new Date('2023-10-01T22:30:00'),
          endTime: new Date('2023-10-01T23:30:00'),
          friends: ['friends/Friend4.jpg', 'friends/Friend1.jpg', 'friends/Friend5.jpg'],
        },
      ];
    } else if (stage === 'Stage 2') {
      return [
        {
          name: 'Architects',
          beginTime: new Date('2023-10-01T11:00:00'),
          endTime: new Date('2023-10-01T12:00:00'),
        },
        {
          name: 'Parkway Drive',
          beginTime: new Date('2023-10-01T12:30:00'),
          endTime: new Date('2023-10-01T14:00:00'),
        },
        {
          name: 'August Burns Red',
          beginTime: new Date('2023-10-01T15:00:00'),
          endTime: new Date('2023-10-01T15:30:00'),
        },
        {
          name: 'Northlane',
          beginTime: new Date('2023-10-01T16:00:00'),
          endTime: new Date('2023-10-01T18:00:00'),
        },
        {
          name: 'Polaris',
          beginTime: new Date('2023-10-01T19:30:00'),
          endTime: new Date('2023-10-01T21:00:00'),
        },
        {
          name: 'Thy Art Is Murder',
          beginTime: new Date('2023-10-01T21:30:00'),
          endTime: new Date('2023-10-01T23:00:00'),
          friends: ['friends/Friend1.jpg', 'friends/Friend4.jpg', 'friends/Friend3.jpg'],
        },
      ];
    } else if (stage === 'Stage 3') {
      return [
        {
          name: 'Make Them Suffer',
          beginTime: new Date('2023-10-01T13:00:00'),
          endTime: new Date('2023-10-01T13:30:00'),
        },
        {
          name: 'Novelists',
          beginTime: new Date('2023-10-01T14:30:00'),
          endTime: new Date('2023-10-01T15:00:00'),
        },
        {
          name: 'Sleep Token',
          beginTime: new Date('2023-10-01T15:00:00'),
          endTime: new Date('2023-10-01T15:30:00'),
        },
        {
          name: 'Vulvodynia',
          beginTime: new Date('2023-10-01T16:00:00'),
          endTime: new Date('2023-10-01T18:00:00'),
          friends: ['friends/Freund2.jpg']
        },
        {
          name: 'Fit for a King',
          beginTime: new Date('2023-10-01T19:30:00'),
          endTime: new Date('2023-10-01T20:20:00'),
          friends: ['friends/Friend2.jpg', 'friends/Friend6.jpg', 'friends/Friend7.jpg'],
        },
        {
          name: 'Currents',
          beginTime: new Date('2023-10-01T20:30:00'),
          endTime: new Date('2023-10-01T21:30:00'),
        },
      ];
    } else {
      return [];
    }
  }

  constructor() {}
}
