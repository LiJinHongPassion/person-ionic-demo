import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  list = [
    {
      color: 'danger',
      iconName: 'person-outline',
      labelId: 'person.mgmt',
      routerLink: '/person'
    },
    {
      color: 'danger',
      iconName: 'people-outline',
      labelId: 'group.mgmt',
      routerLink: '/group'
    },
    {
      color: 'danger',
      iconName: 'create-outline',
      labelId: 'event.mgmt',
      routerLink: '/event'
    },
    {
      color: 'danger',
      iconName: 'globe-outline',
      labelId: 'relation.mgmt',
      routerLink: '/relation'
    },
    {
      color: 'danger',
      iconName: 'server-outline',
      labelId: 'data.mgmt',
      routerLink: '/data'
    },
  ]
  constructor() {}

}
