import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HowItsWorkPage } from './how-its-work.page';

describe('HowItsWorkPage', () => {
  let component: HowItsWorkPage;
  let fixture: ComponentFixture<HowItsWorkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowItsWorkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HowItsWorkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
