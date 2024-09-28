import { Component, inject, OnInit } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { DataService, Message } from 'src/app/services/data.service';
import { User } from 'src/app/services/sqlite/models/user';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
})
export class PersonListComponent   {

  userList: User[] = [
    {
      id: 0,
      name: '王明',
      nickname: '小王',
      gender: '1',
      field: '',
      type: '',
      profession: '医生,护士',
      birthday: '2000-01-01',
      hobbies: '汽车,怕是,dsadasdas,dadqwdqdsd,qd,q,,qq,q,q,q,q,q,q,qewqa,s',
      education: '',
      phone: '',
      value_degree: '1'
    }
  ]


  private data = inject(DataService);
  constructor() { }


  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }
}
