import { RegisterService } from './../../services/register.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  username!: string;
  password!: string;

  constructor(private registerService: RegisterService) { }

  register(): void {
    if (this.username.length < 3) {
      alert("Username ít nhất 3 ký tự!")
      return;
    }
    
    if (this.password.length < 6) {
      alert("Password ít nhất 6 ký tự!")
      return;
    }
    this.registerService.register(this.username, this.password)
      .subscribe(response => {
        console.log('Registration successful');
        alert("Đăng kí thành công")
      });
  }
}
