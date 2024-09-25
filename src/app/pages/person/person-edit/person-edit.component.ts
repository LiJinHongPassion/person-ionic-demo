import { Component, OnInit } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
import { switchMap, of } from 'rxjs';
import { User } from 'src/app/services/sqlite/models/user';
import { StorageService } from 'src/app/services/sqlite/services/storage.service';
import { ToastComponent } from 'src/app/services/toast/toast.component.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss'],
})
export class PersonEditComponent  implements OnInit {
  newUserName = ''
  userList: User[] = []
  isWeb: any

  constructor(private storage: StorageService,private toastService: ToastComponent) {}

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
        this.userList = data; // Update the user list when the data changes
      });

    } catch(err) {
      throw new Error(`Error: ${err}`);
    }
  }
  async createUser() {
    await this.storage.addUser(this.newUserName)
    this.newUserName = ''
    console.log(this.userList, '#users')
  }

  updateUser(user: User) { 
    this.storage.updateUserById(user.id.toString(), 1)
  }

  deleteUser(user: User) {
    this.storage.deleteUserById(user.id.toString())
  }



  async writeSecretFile(){
    const randomNum = Math.random();
    const urlResp = await Filesystem.writeFile({
      path: 'ljh/text' + randomNum + '.txt',
      data: 'This is a test',
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
      recursive: true
    });

    this.toastService.showInfo(urlResp.uri)
    this.readDir();
  };


  public files: any = []
  async readDir(){
    const filesResp = await Filesystem.readdir({
      path: 'ljh',
      directory: Directory.Documents
    })
    this.files = filesResp.files;
  }

  async openFile(filePath: any){

    await Share.share({
      url: filePath,
    });
  }
 
}
