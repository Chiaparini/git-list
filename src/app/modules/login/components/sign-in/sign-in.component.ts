import { Component, OnInit } from '@angular/core';
import { keys } from '../../../../../environments/local';
import { AuthService } from '@auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  SIGN_URL = `https://github.com/login/oauth/authorize?client_id=${keys.ID}`
  buttonText = 'Sign in'

  constructor(private service: AuthService, private router: Router) { }
  
  ngOnInit() {
    const code = this.getCode()
    if(code && !this.service.isAuthenticated()) {
      this.buttonText = 'Redirecting...'
      this.SIGN_URL = "#"
      this.service.authenticate(code)
        .subscribe((response: any) => {
          const { access_token, token_type } = response
          this.service.setSession( access_token, token_type )
          this.router.navigate(['/list'])
        })
    }

    if(this.service.isAuthenticated) {
      this.router.navigate(['/list'])
    }
  }

  getCode(): string {
    const url = new URL(window.location.href)
    return url.searchParams.get('code') || null
  }
}
