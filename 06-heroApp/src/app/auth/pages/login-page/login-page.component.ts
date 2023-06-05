import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {
  

  constructor(
    private authService: AuthService,
    private router : Router,
    ){}

  onlogin():void{

    this.authService.login('warner@hotmail.com','admin123')
    .subscribe(user =>{
      this.router.navigate(['/heroes'])
    })

  }

}
