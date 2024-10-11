import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, of } from 'rxjs';
import { StorageEventService } from 'src/app/services/sqlite/services/storage-event.service';
import { StorageUserService } from 'src/app/services/sqlite/services/storage-user.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss'],
})
export class EventEditComponent  implements OnInit { 
  event: any = {
    id: 0,
    date: new Date().toISOString().slice(0, 19),
    description: '',
    person: ''
  }
  default = {
    id: 0,
    date: new Date().toISOString().slice(0, 19),
    description: '',
    person: ''
  }

  tempField = '';
  tempHobbies = '';
  tempProfession = '';


  userList: any[] = [];

  clearEvent(){
    this.event = this.default;
  }

  constructor(
    private storage: StorageUserService,
    private eventService: StorageEventService,
    public router: Router,
    private acRouter: ActivatedRoute,
    private storageService: StorageUserService
  ) {}
  ngOnInit(): void {
    const params: any = this.acRouter.snapshot.params;
    const eventId = params?.id;
   
    this.eventService.getEventById(eventId).then(res=>{
      this.event = res;
      console.log(this.event)
    })


    this.storage.userState().pipe(
      switchMap(res => {
        if (res) {
          return this.storage.fetchUsers();
        } else {
          return of([]); // Return an empty array when res is false
        }
      })
    ).subscribe(data => {
      console.log(data)
      this.userList = data; // Update the user list when the data changes
    });


  }
 
  save(){
    console.log(this.event)
    const temp = { ...this.event }
      temp.person = temp.person.join(',')
    

    const isAdd = this.event.id === 0;
    isAdd && this.eventService.addEvent({
      ...temp
    }).then(()=>{
      this.router.navigate(['/event'])
    });
    !isAdd&& this.eventService.updateEventById(temp.id, {
      ...temp
    }).then(()=>{
      this.router.navigate(['/event'])
    });
  }

}
