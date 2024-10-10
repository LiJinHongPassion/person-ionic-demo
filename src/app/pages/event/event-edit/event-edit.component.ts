import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { toEntityUser, toEditUser } from 'src/app/services/sqlite/models/user';
import { StorageEventService } from 'src/app/services/sqlite/services/storage-event.service';
import { StorageUserService } from 'src/app/services/sqlite/services/storage-user.service';
import { ToastComponent } from 'src/app/services/toast/toast.component.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss'],
})
export class EventEditComponent  implements OnInit { 
 

  save(){
    this.eventService.addEvent({
      person: '测试,lll',
      date: '2022-01-01',
      description: "这是描述"
    });
  }

  event: any = {
    id: 0,
    date: '',
    description: '',
    person: ''
  }
  default = {
    id: 0,
    date: '',
    description: '',
    person: ''
  }

  tempField = '';
  tempHobbies = '';
  tempProfession = '';
  tempDate = '2000-11-02T01:22:00';


  ionBirthdayChange(){
    if(!this.tempDate){
      return;
    }
    this.event.date = this.tempDate;
  }

  submit() { 
    const isAdd = this.event.id === 0;
    const saveUser = toEntityUser(this.event, isAdd);
    console.log(saveUser)
    isAdd && this.storage.addUser(saveUser).then(()=>{
      this.event = this.default;
      this.router.navigate(['/person'])
    })
    !isAdd&& this.storage.updateUserById(this.event.id, saveUser).then(()=>{
      this.router.navigate(['/person'])
    })
  }
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
    const userId = params?.id;
   
    this.storageService.getUserById(userId).then(res=>{
      this.event = toEditUser(res);
      console.log(this.event)
    })
  }
 

}
