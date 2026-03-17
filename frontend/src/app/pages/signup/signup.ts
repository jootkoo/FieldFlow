import { Component, inject } from '@angular/core';
//import commonmodule and formsmodule to use common directives and form handling in our component.
//specifically, commonmodule allows us to use directives like *ngIf and *ngFor, 
// while FormsModule enables two-way data binding for form inputs.
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from "../../services/auth.service";
// This is the Signup component, which allows users to create new accounts. 
// It provides a simple and intuitive interface for users to enter their information and register for the application.
@Component({
    standalone: true,
    selector: 'signup',
    imports: [CommonModule, FormsModule],
    templateUrl: './signup.html',
    styleUrls: ['./signup.css']
})
export class Signup {
    // Injecting the Router and AuthService to handle navigation and authentication logic.
    private router = inject(Router);
    private authService = inject(AuthService);

    //Variables declared
    username: string = '';
    password: string = '';
    confirmPassword: string = '';
    email: string = '';
    message: string = '';
    // The onSubmit method is called when the user submits the signup form.
    // we set a const info object so we can have all the users information in one place, 
    // which can then be sent to the backend for processing and account creation.
    onSubmit() {
        //Check for empty fields - removed for redundancy since the form will not submit if there are empty fields,
        // but can be added back if needed
        /*
        if (this.password == '' || this.username == '' || this.email == '' || this.confirmPassword == '') {
        this.message = 'Please fill in all fields';
        return;
        }
        */
        if (this.password.length <6) {
        this.message = 'Password must be at least 6 characters long';
        return;
        }
        //Check password and confirm password match, if not send error message
        if (this.password !== this.confirmPassword) {
        this.message = 'Passwords do not match';
        return;
        }
        const info = {
        username: this.username,
        password: this.password,
        email: this.email
        };
        
        // Calls the signup method of the AuthService, passing the info object.
        this.authService.signup(info).subscribe({
            next: (res) => {
                this.message = "Signup successful! Please log in.";
                this.router.navigate(['/home']);
            },
            // If there is an error during the signup process, sends error message or Unknown error if there is no message
            error: (err) => {
                this.message = "Signup failed: " + (err.error?.message || 'Unknown error');
            }
        });
    }
    

    //back button
    goBack() {
        this.router.navigate(['/home']);
    }


}

