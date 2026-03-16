import { Component, inject} from '@angular/core';
import { Router } from '@angular/router';

// This is the estimates component, which allows users to view and manage their estimates. 
// It provides a simple and intuitive interface for users to access their estimates and make informed decisions about their projects.
@Component({
    standalone: true,
  selector: 'estimates',
  templateUrl: './estimates.html',
  styleUrls: ['./estimates.css']
})
export class Estimates {
    private router = inject(Router);
    goBack() {
        this.router.navigate(['/dashboard']);
    }

}

