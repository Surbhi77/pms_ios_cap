import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailListPage } from './detail-list.page';

describe('DetailListPage', () => {
  let component: DetailListPage;
  let fixture: ComponentFixture<DetailListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
