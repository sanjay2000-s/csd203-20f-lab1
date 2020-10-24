import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { async } from 'rxjs/internal/scheduler/async';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any = {
    email: ""
    }
  loggedIn: boolean;
    getUserData() {
      return this.userData;
      }
      signInWithGooglePopUp() {
      let provider = new firebase.auth.GoogleAuthProvider();
     
      firebase.auth().signInWithPopup(provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // result.credential.accessToken;
      this.loggedIn = true;
      this.userData.email = result.user.email;
      }).catch((error) => {
      // Handle Errors here.
      //error.code;
      //error.message;
      //error.email;
      console.log(error.message);
      });
    }
   
  signInWithEmail() {
    throw new Error('Method not implemented.');
  }

  constructor() { 
    let loggedIn:boolean = true;

    function signInWithEmail(email: String, password: String) {
      if (email === 'testuse' && password === 'temp') {
      this.loggedIn = true;
      alert("Sign in pressed");
      }
      else{
        throw new Error("Invalid credentials");
      }
    }
  }
  
}
