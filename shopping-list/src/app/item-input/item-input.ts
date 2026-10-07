import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-input',
  imports: [FormsModule],
  templateUrl: './item-input.html',
  styleUrl: './item-input.css'
})
export class ItemInput {
  @Output() addItem: EventEmitter<string> = new EventEmitter<string>();
  newItem = '';

  add(): void {
    const item = this.newItem.trim();
    if (item) {
      this.addItem.emit(item);
      this.newItem = '';
    }
  }
}
