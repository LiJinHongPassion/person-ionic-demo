import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {
deleteEvent(arg0: any) {
throw new Error('Method not implemented.');
}

  constructor() { } 

  @Input() entries: any[] = [
    {
      date: '2023-09-15',
      persons: [
        { name: 'Kimi', avatar: 'assets/kimi-avatar.png' },
        { name: 'Alex', avatar: 'assets/alex-avatar.png' },
      ],
      description: 'Started working at Moonshot AI'
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
