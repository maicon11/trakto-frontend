import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';

describe('TextInputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ InputComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    component.control = new FormControl('initial value');
    component.label = 'Text Input';
    fixture.detectChanges();
  });

  it('should create a input', () => {
    expect(component).toBeTruthy();
  });

  it('should update a input value', async () => {
    const input = fixture.nativeElement.querySelector('input')
    input.value = 'updated value';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    await fixture.whenStable();
    expect(component.control.value).toBe('updated value');
  });
});
