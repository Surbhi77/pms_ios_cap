import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KdpSuveyPage } from './kdp-suvey.page';

describe('KdpSuveyPage', () => {
  let component: KdpSuveyPage;
  let fixture: ComponentFixture<KdpSuveyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KdpSuveyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KdpSuveyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
