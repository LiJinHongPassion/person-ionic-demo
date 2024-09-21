import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PersonListComponent } from './person-list.component';
import { MessageComponentModule } from 'src/app/message/message.module';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

describe('PersonListComponent', () => {
  let component: PersonListComponent;
  let fixture: ComponentFixture<PersonListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PersonListComponent],
      imports: [IonicModule.forRoot(), MessageComponentModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
