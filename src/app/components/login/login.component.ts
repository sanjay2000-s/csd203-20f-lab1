import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  
  email: string = "";
  password: string = "";
  constructor(private auth: AuthService, private router: Router) { }

  signIn() {
    this.auth.signInWithEmail(this.email, this.password)
    .then(function(response){
      this.router.navigate(["/user-profile"], { queryParams: { id: 1 } });
    })
    .catch((error:any)=>{
        console.log('Opps!, promise error: ',error);
    })
    
  }
  
  signInWithGoogle() {
    this.auth.signInWithGooglePopUp();
    }   
  ngOnInit() {}

}
