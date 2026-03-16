import { Component, inject} from '@angular/core';
import { Router } from '@angular/router';

// This is the inventory component, which allows users to view and manage their inventory.
// It provides a simple and intuitive interface for users to access their inventory data 
// and make informed decisions about their stock levels and product availability.
@Component({
    standalone: true,
  selector: 'inventory',
  templateUrl: './inventory.html',
  styleUrls: ['./inventory.css']
})
export class Inventory {
    private router = inject(Router);
    goBack() {
        this.router.navigate(['/dashboard']);
    }

}

