import { SharedModule } from './../../../shared/shared.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ SharedModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a login page', () => {
    expect(component).toBeTruthy();
  });

  it('should render a login form with username and password', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('#loginForm')
    const inputElements = formElement.querySelectorAll('input')
    expect(inputElements.length).toBe(2)
  });
});
