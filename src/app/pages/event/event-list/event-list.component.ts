import { Component, OnInit } from '@angular/core';
import { of, switchMap } from 'rxjs';
import { UserPipe } from 'src/app/component/pipe/user/user.pipe';
import { StorageEventService } from 'src/app/services/sqlite/services/storage-event.service';
import { StorageUserService } from 'src/app/services/sqlite/services/storage-user.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent  implements OnInit {

  eventList: any[] = []
  userList: any[] = []
  constructor(
    private eventService: StorageEventService,
    private userService: StorageUserService,
    private userPipe: UserPipe
  ) { }

  ngOnInit() {
    this.userService.userState().pipe(
      switchMap(res => {
        if (res) {
          return this.userService.fetchUsers();
        } else {
          return of([]); // Return an empty array when res is false
        }
      })
    ).subscribe(userdata => { 
      this.userList = userdata; // Update the user list when the data changes
      this.eventService.eventState().pipe(
        switchMap(res => {
          if (res) {
            return this.eventService.fetchEvents();
          } else {
            return of([]); // Return an empty array when res is false
          }
        })
      ).subscribe(data => { 
        this.eventList = data.map((d:any)=>{
         const names = (d.person??'').split(',').map((id: string)=>{
            return {name: this.userPipe.transform(id, userdata)}
          }) 
          return {
            description: d.description,
            date: d.date,
            persons: names
          }
        })
      }); 

    });

    
  }

}
