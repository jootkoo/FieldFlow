// The AuthService is responsible for handling authentication-related operations, such as user signup.
import { Injectable, inject } from '@angular/core';
// We import the HttpClient module to make HTTP requests to the backend API for authentication operations.
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// The AuthService class provides a method for signing up new users by sending their information to the backend API.
export class AuthService {
  private http = inject(HttpClient);
  // The apiUrl variable holds the base URL for the authentication API endpoints.
  private apiUrl = 'https://localhost:5001/api/auth';

  // The signup method takes a data object containing the user's information 
  // and sends a POST request to the backend API to create a new account.
  signup(data: { username: string; password: string; email: string;}) {
    // This return holds all the information of the user and sends it to the backend for processing and account creation.
    return this.http.post(`${this.apiUrl}/signup`, data);
  }
}