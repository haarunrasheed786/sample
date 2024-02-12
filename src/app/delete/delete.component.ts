import { Component } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];

  selectedItem: any;

  deleteItem() {
    if (!this.selectedItem) return; // If no item selected, exit
    this.items = this.items.filter(item => item !== this.selectedItem);
    this.selectedItem = null; // Clear selected item after deletion
  }
}
