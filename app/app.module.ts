import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { PrivateComponent } from './private.component';
import { AuthenticationService } from './authentication.service';

import { routing, appRoutingProviders }  from './app.routing';

@NgModule({
    imports:  [ BrowserModule, FormsModule, routing ],
    declarations: [ AppComponent, PrivateComponent, LoginComponent ],
    providers: [ appRoutingProviders, AuthenticationService ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }