import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-error',
  templateUrl: './delete-error.component.html',
})
export class DeleteErrorComponent implements OnInit {
  @Output() confirm: EventEmitter<{ isConfirmed: boolean }> = new EventEmitter();
  @Input() isClosed = true;
  @Input() data: any
  constructor() { }

  ngOnInit(): void { }

  closeBtn() {
    this.confirm.emit({ isConfirmed: false });
  }
  cancelBtn() {
    this.confirm.emit({ isConfirmed: false });
  }
  deleteBtn() {
    this.confirm.emit({ isConfirmed: true });
  }
}
