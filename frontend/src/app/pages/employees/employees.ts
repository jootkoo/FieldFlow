import { Component, inject} from '@angular/core';
import { Router } from '@angular/router';
import { Navbar } from "../../components/navbar/navbar";
// This is the employee component, which allows users to view and manage their customer information. 
// It provides a simple and intuitive interface for users to access their customer data and make informed decisions about their business relationships.
@Component({
    standalone: true,
    imports: [Navbar],
    selector: 'employees',
    templateUrl: './employees.html',
    styleUrls: ['./employees.css']
})
export class Employees {
    private router = inject(Router);
  
}

