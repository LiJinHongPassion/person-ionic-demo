import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, RefresherCustomEvent } from '@ionic/angular';
import { of, switchMap } from 'rxjs';
import { DataService, Message } from 'src/app/services/data.service';
import { User } from 'src/app/services/sqlite/models/user';
import { StorageService } from 'src/app/services/sqlite/services/storage.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
})
export class PersonListComponent implements OnInit{

  userList: User[] = []
 
  constructor(
    public storage: StorageService, 
    private modal: ModalController,
    private router: Router
  ) { }
  ngOnInit() {
    try {
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

    } catch(err) {
      throw new Error(`Error: ${err}`);
    }
  }

  refresh(ev: any) {
    this.storage.loadUsers();
  }

  deleteUser(id: number){
    // this.modal.create({

    // })
    this.storage.deleteUserById(id.toString())
  }
  gotoDetail(id: number){
    this.router.navigate([`/person/detail/${id}`])
  }
}
