import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AppHttpService } from '../app/app-http.service';
import { User } from '../models/user';

@Component({templateUrl: './login.component.html'})
export class LoginComponent {

    public user: User;

    constructor (
        private httpService: AppHttpService, 
        private router: Router
    ) {}

    ngOnInit() {
        this.user = new User();
    }
}