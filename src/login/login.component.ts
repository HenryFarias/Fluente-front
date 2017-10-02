import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AppHttpService } from '../app/app-http.service';
import { User } from '../models/user';

@Component({templateUrl: './login.component.html'})
export class LoginComponent {

    public user: User;
    public message:string = null;

    constructor (
        private httpService: AppHttpService, 
        private router: Router
    ) {}

    ngOnInit() {
        this.user = new User();
    }

    login() {
        //this.message = null;
        
        //this.httpService.builder('login').autenticate(this.user).then(() => {
            this.user.logado = true;
            sessionStorage.setItem("user", JSON.stringify(this.user));
            this.router.navigate(['/dashboard']);
        //}).catch(error => {
        //    var erro = error.json();
        //    this.message = error.json().error;
        //});
    }
}