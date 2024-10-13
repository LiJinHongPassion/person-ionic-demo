import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { switchMap, of } from 'rxjs';
import { Item } from 'src/app/component/multi-select-search/multi-select-search.component';
import { StorageEventService } from 'src/app/services/sqlite/services/storage-event.service';
import { StorageUserService } from 'src/app/services/sqlite/services/storage-user.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss'],
})
export class EventEditComponent  implements OnInit { 

  @ViewChild('modal', { static: true }) modal!: IonModal;
  
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
      this.userList = data.map(d=>{
        return {
          text: d.name,
          value: d.id
        }
      }); // Update the user list when the data changes
    });


  }
 
  save(){
    if(this.event.person.length == 0 || this.event.description.length == 0){
      return;
    }
    const temp = { ...this.event }
    temp.person = temp.person.join(',')

    console.log('保存', temp)
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


  selectedPersonsText = '0';


  private formatData(data: string[]) {
    if (data.length === 1) {
      const person: any = this.userList.find((user) => user.value === data[0]);
      return person.text;
    }

    return `${data.length}`;
  }

  personSelectionChanged(persons: string[]) {
    this.event.person = persons;
    this.selectedPersonsText = this.formatData(this.event.person);
    this.modal.dismiss();
  }
}
