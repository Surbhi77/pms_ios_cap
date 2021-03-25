import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QueriesCommentsPage } from './queries-comments.page';

describe('QueriesCommentsPage', () => {
  let component: QueriesCommentsPage;
  let fixture: ComponentFixture<QueriesCommentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueriesCommentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QueriesCommentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
