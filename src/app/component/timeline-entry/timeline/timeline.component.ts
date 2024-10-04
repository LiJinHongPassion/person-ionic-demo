import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {

  constructor() { } 

  entries: any[] = [
    {
      date: '2023-09-15',
      persons: [
        { name: 'Kimi', avatar: 'assets/kimi-avatar.png' },
        { name: 'Alex', avatar: 'assets/alex-avatar.png' },
      ],
      event: 'Started working at Moonshot AI'
    },
    {
      date: '2022-06-30',
      persons: [
        { name: 'Luna', avatar: 'assets/luna-avatar.png' },
      ],
      event: 'Graduated from University'
    },
    {
      date: '2022-06-30',
      persons: [
        { name: 'Luna', avatar: 'assets/luna-avatar.png' },
      ],
      event: 'Graduated from University'
    },
    // Add more entries as needed
  ];
}
