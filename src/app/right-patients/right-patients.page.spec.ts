import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RightPatientsPage } from './right-patients.page';

describe('RightPatientsPage', () => {
  let component: RightPatientsPage;
  let fixture: ComponentFixture<RightPatientsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightPatientsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RightPatientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
