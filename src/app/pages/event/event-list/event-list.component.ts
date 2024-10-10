import { Component, OnInit } from '@angular/core';
import { of, switchMap } from 'rxjs';
import { StorageEventService } from 'src/app/services/sqlite/services/storage-event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent  implements OnInit {

  eventList: any[] = []
  constructor(private eventService: StorageEventService) { }

  ngOnInit() {
    // this.eventService.addEvent({
    //   name: '测试',
    //   date: '2022-01-01',
    //   description: "这是描述"
    // });

    this.eventService.eventState().pipe(
      switchMap(res => {
        if (res) {
          return this.eventService.fetchEvents();
        } else {
          return of([]); // Return an empty array when res is false
        }
      })
    ).subscribe(data => {
      console.log(data)
      this.eventList = data.map((d:any)=>{
        return {
          description: d.description,
          date: d.date,
          pserson: (d.pserson??'').split(',')
        }
      })
    }); 
  }

}
