import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private router: Router
  ) { }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') !== null;
  }

  getToken(): string {
    return localStorage.getItem('loggedIn');
  }

  logout() {
    localStorage.removeItem('loggedIn');
    this.router.navigate(['videos']);
  }
}
