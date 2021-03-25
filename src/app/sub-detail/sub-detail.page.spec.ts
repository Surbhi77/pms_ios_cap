import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubDetailPage } from './sub-detail.page';

describe('SubDetailPage', () => {
  let component: SubDetailPage;
  let fixture: ComponentFixture<SubDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
