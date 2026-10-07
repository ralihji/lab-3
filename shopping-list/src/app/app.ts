import { Component } from '@angular/core';
import { ItemInput } from './item-input/item-input';
import { ItemList } from './item-list/item-list';

@Component({
  selector: 'app-root',
  imports: [ItemInput, ItemList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  items: string[] = [];

  addItem(item: string): void {
    this.items = [...this.items, item];
  }

  removeItem(index: number): void {
    this.items = this.items.filter((_, i) => i !== index);
  }
}
