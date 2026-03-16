import { Component, inject} from '@angular/core';
//inject is imported to allow us to use the router
//This import allow us to navigate between pages
import { Router } from '@angular/router';


// This is the Home component, which serves as the Login page for the application. 
// It provides a simple and intuitive interface for users to log in to their accounts. 
// The component is designed to be simple and user-friendly, 
// allowing users to easily log in and access their personalized content.
@Component({
    standalone: true,
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
    private router = inject(Router);

    username: string = '';
    password: string = '';
    remember = false;


    //This is the button for the submit button on the html page
    onSubmit() {

    }


    //This is the button for the signup button on the html page
    //possible through the inject and routher imports
    goSignup() {
        this.router.navigate(['/signup']);
    }


}