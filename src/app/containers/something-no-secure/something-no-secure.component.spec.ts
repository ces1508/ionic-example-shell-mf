import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SomethingNoSecureComponent } from './something-no-secure.component';

describe('SomethingNoSecureComponent', () => {
  let component: SomethingNoSecureComponent;
  let fixture: ComponentFixture<SomethingNoSecureComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SomethingNoSecureComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SomethingNoSecureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
