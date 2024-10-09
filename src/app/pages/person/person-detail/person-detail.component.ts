import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageUserService } from 'src/app/services/sqlite/services/storage-user.service';
import { ToastComponent } from 'src/app/services/toast/toast.component.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss'],
})
export class PersonDetailComponent  implements OnInit {

  user: any = {}
  constructor(private acRouter: ActivatedRoute,
    private toast: ToastComponent,
    private storageService: StorageUserService
  ) { }

  ngOnInit() {
    const params: any = this.acRouter.snapshot.params;
    const userId = params?.id;
    if(!userId){
      this.toast.showError('back.and.retry')
    }
    this.storageService.getUserById(userId).then(res=>{
      this.user = res;
    })

  }

}
