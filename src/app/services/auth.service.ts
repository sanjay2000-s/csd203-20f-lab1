import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  signInWithEmail() {
    throw new Error('Method not implemented.');
  }

  constructor() { 
    let loggedIn:boolean = true;

    function signInWithEmail() {
      this.loggedIn = true;
      alert("Sign in pressed");
    }
  }
}
