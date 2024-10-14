import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { CommonModalService } from 'src/app/services/modal/common-modal.service';
import { User } from 'src/app/services/sqlite/models/user';
import { StorageUserService } from 'src/app/services/sqlite/services/storage-user.service';
import { ToastComponent } from 'src/app/services/toast/toast.component.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
})
export class PersonListComponent implements OnInit{
  searchValue = ''
  userList: User[] = []
  displayUserList: User[] = []
 
  constructor(
    public storage: StorageUserService, 
    public toast: ToastComponent,
    public modalService: CommonModalService,
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
        this.displayUserList = this.userList;
      });

    } catch(err) {
      throw new Error(`Error: ${err}`);
    }
  }

  refresh(ev: any) {
    this.storage.loadUsers();
  }

  deleteUser(id: number){
    // this.modalService.showConfimModal()
    this.storage.deleteUserById(id.toString())
  }
  gotoDetail(id: number){
    this.router.navigate([`/person/detail/${id}`])
  }
  editUser(id: number){
    this.router.navigate([`/person/modify/${id}`])
  }

  search(){
    this.displayUserList = this.userList.filter(u=>u.name.includes(this.searchValue) || u.nickname.includes(this.searchValue))
  }
}
