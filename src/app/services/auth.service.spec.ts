import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

let loggedIn:boolean = true;

  function signInWithEmail() {
    this.loggedIn = true;
    alert("Sign in pressed");
  }


describe('AuthService', () => {
  let service: AuthService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
