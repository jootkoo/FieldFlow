import { Component, inject} from '@angular/core';
import { Router } from '@angular/router';
import { Navbar } from "../../components/navbar/navbar";
// This is the inquiries component, which allows users to view and manage their inquiries. 
// It provides a simple and intuitive interface for users to access their inquiries and make informed decisions about their business relationships.
@Component({
    standalone: true,
    imports: [Navbar],
    selector: 'inquiries',
  templateUrl: './inquiries.html',
  styleUrls: ['./inquiries.css']
})
export class Inquiries {
    private router = inject(Router);

}

