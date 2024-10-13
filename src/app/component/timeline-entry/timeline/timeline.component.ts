import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {
  @Output() deleteClick = new EventEmitter();
  @Input() entries: any[] = [
    // {
    //   date: '2023-09-15',
    //   persons: [
    //     { name: 'Kimi', avatar: 'assets/kimi-avatar.png' },
    //     { name: 'Alex', avatar: 'assets/alex-avatar.png' },
    //   ],
    //   description: 'Started working at Moonshot AI'
    // },
    
  ];

  constructor() { } 
  deleteEvent(event: any) {
    this.deleteClick.emit(event)
  }
}
