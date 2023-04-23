import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { InputComponent } from './components/form/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    ReactiveFormsModule
  ],
  declarations: [
    InputComponent,
    ButtonComponent
  ],
})
export class SharedModule { }
