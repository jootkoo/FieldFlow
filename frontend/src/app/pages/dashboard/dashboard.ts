import { Component, inject} from '@angular/core';
import { Router } from '@angular/router';

// from navbar ts
import { Navbar } from "../../components/navbar/navbar";

// This is the dashboard component, which serves as the main page for the application. 
// It provides an overview of the user's data and activities. 
// The component is designed to be simple and user-friendly, 
// allowing users to easily navigate through their information and access important features.
@Component({
  standalone: true,
  selector: 'dashboard',
  imports: [Navbar],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {
  private router = inject(Router);

  


}