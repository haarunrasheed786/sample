import { Component } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']  // <-- Corrected property name
})
export class EditComponent {
  newItem: string = '';

  editItem() {
    if (this.newItem.trim() === '') {
      // Do not add empty items
      return;
    }
    // Here you would typically perform the actual "create" operation,
    // such as sending a request to your backend server to add the item to a database.
    console.log('Editing item:', this.newItem);
    this.newItem = ''; // Clear input field after adding item
  }

}
