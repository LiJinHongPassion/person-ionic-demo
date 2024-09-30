import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
import { switchMap, of } from 'rxjs';
import { toEntityUser, User } from 'src/app/services/sqlite/models/user';
import { StorageService } from 'src/app/services/sqlite/services/storage.service';
import { ToastComponent } from 'src/app/services/toast/toast.component.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss'],
})
export class PersonEditComponent {


  user: any = {
    id: 0,
    name: '',
    nickname: '',
    gender: '1',
    filedArr: [],
    type: '',
    professionArr: [],
    birthday: '',
    hobbiesArr: [],
    education: '',
    phone: '',
    value_degree: ''
  }
  default = {
    id: 0,
    name: '',
    nickname: '',
    gender: '1',
    filedArr: [],
    type: '',
    professionArr: [],
    birthday: '',
    hobbiesArr: [],
    education: '',
    phone: '',
    value_degree: ''
  }

  tempFiled = '';
  tempHobbies = '';
  tempProfession = '';
  tempBirthday = '2000-11-02T01:22:00';

  addHobbies(){
    if(!this.tempHobbies){
      return;
    }
    this.user.hobbiesArr.push(this.tempHobbies);
    this.tempHobbies = ''
  }
  addFiled(){
    if(!this.tempFiled){
      return;
    }
    this.user.filedArr.push(this.tempFiled);
    this.tempFiled = ''
  }
  addProfession(){
    if(!this.tempProfession){
      return;
    }
    this.user.professionArr.push(this.tempProfession);
    this.tempProfession = ''
  }
  ionBirthdayChange(){
    if(!this.tempBirthday){
      return;
    }
    this.user.birthday = this.tempBirthday;
  }

  submit() {
    if(!this.user.name){
      return; 
    }
    const saveUser = toEntityUser(this.user);
    console.log(saveUser)
    this.storage.addUser(saveUser).then(()=>{
      this.user = this.default;
      this.router.navigate(['/person'])
    })
  }
  clearUser(){
    this.user = this.default;
  }

  constructor(private storage: StorageService,private toastService: ToastComponent, public router: Router
  ) {}
 

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
