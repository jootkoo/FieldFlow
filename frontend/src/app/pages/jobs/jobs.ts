import { Component, inject} from '@angular/core';
import { Router } from '@angular/router';
// This is the jobs component, which allows users to view and manage their jobs. 
// It provides a simple and intuitive interface for users to access their job data and make informed decisions about their projects.
@Component({
    standalone: true,
  selector: 'jobs',
  templateUrl: './jobs.html',
  styleUrls: ['./jobs.css']
})
export class Jobs {
    private router = inject(Router);
    goBack() {
        this.router.navigate(['/dashboard']);
    }


}

