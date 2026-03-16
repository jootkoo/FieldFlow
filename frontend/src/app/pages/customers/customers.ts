import { Component, inject} from '@angular/core';
import { Router } from '@angular/router';

// This is the customers component, which allows users to view and manage their customer information. 
// It provides a simple and intuitive interface for users to access their customer data and make informed decisions about their business relationships.
@Component({
    standalone: true,
  selector: 'customers',
  templateUrl: './customers.html',
  styleUrls: ['./customers.css']
})
export class Customers {
    private router = inject(Router);
    goBack() {
        this.router.navigate(['/dashboard']);
    }

}

