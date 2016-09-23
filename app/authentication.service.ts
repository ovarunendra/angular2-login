import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

export class User {
  constructor(
    public email: string,
    public password: string) { }
}

// var users = [
//   new User('admin@admin.com','admin'),
//   new User('varun@gmail.com','varun')
// ];

function dosomething(router: Router, res, user) {
    var users = res.json();
                
    var authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser){
      localStorage.setItem("user", user);
      router.navigate(['home']);      
      return true;
    }
    return false;
  }

@Injectable()
export class AuthenticationService {

  constructor(
    private _router: Router, private http:Http){}
    

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }

  login(user){
    this.http.get('data/users.json')
                .subscribe(res => dosomething(this._router, res, user));
  }  

   checkCredentials( ){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['login']);
    }
  } 
}