import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text: string = ''
  @Input() type : 'button' | 'submit' = 'button';
  @Input() colorClass: string = 'bg-brand-green';
  @Input() outline: boolean = false;
  @Input() loading = false;
  @Input() isDisabled = false;

  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }
}
