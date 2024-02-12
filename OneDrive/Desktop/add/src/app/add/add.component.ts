import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  newItem: string = '';

  addItem() {
    if (this.newItem.trim() === '') {
      // Do not add empty items
      return;
    }
    // Here you would typically perform the actual "create" operation,
    // such as sending a request to your backend server to add the item to a database.
    console.log('Adding item:', this.newItem);
    this.newItem = ''; // Clear input field after adding item
  }

}



