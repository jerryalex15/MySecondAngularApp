import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from "@angular/Router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus?:boolean;

  constructor(private authService: AuthService , private router: Router) { }

  ngOnInit(): void {
    this.authStatus! = this.authService.isAuth; 
  }

  onSignIn():void{
    this.authService.signIn()
    .then(
      ()=>{
        console.log('Sign in Successful');
        this.authStatus! = this.authService.isAuth;
        this.router.navigate(['appareil'])
        // alert("Sign in Successful");
      }
    )
    .catch(()=>console.log("Sign in failed"));
  }

  onSignOut():void {
    this.authService.signOut();
    this.authStatus! = this.authService.isAuth;
  }

}
