import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private loginService: LoginService, private location: Location) { }

  login(): void {
    this.loginService.login(this.username, this.password)
      .subscribe(response => {
        if (response.length > 0) {
          console.log('Login successful');
          this.location.back();
        } else {
          console.log('Invalid credentials');
          alert("Sai username hoặc mật khẩu")
        }
      });
  }
}
