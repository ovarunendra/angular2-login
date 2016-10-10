import { Component } from '@angular/core';
import { AuthenticationService  } from './authentication.service'

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    template: `
            <div class="container" >
                <div class="content">
                    <span>Congratulations, you have successfully logged in!!</span>
                    <br />
                    <a (click)="logout()" href="#">Click Here to logout</a>
                </div>
                <div class="content">
                    <button (click)="downloadProfile()" 
                    class="btn waves-effect waves-light" 
                    type="button" name="download">Download Profile</button>
                </div>
            </div>
    	`
})

export class PrivateComponent {

    constructor(
        private _service:AuthenticationService){}

    ngOnInit(){
        this._service.checkCredentials();
    }

    logout() {
        this._service.logout();
    }

    downloadProfile() {
        this._service.downloadProfile();
    }
}
