import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.loginService.isLoggedIn();
  }

  login() {
    const inputUser = this.loginForm.controls['username'].value;
    const inputPassword = this.loginForm.controls['password'].value;
    const authorized = inputUser === 'admin' && inputPassword === 'password';

    if(authorized) {
      localStorage.setItem('loggedIn', String(Math.random() * 1000));
      this.router.navigate(['manage']);
    }
  }

  logout() {
    this.loginService.logout();
  }

}
