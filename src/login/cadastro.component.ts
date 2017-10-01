import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { AppHttpService } from '../app/app-http.service';
import { User } from '../models/user';

@Component({templateUrl: './cadastro.component.html'})
export class CadastroComponent {

    public user: User;
    private routeId: number;
    public message:string = null;
    public form: FormGroup;

    constructor (
        private httpService: AppHttpService, 
        private router: Router,
        private activatedRoute: ActivatedRoute,
        // private fb: FormBuilder
    ) {
        // this.form = this.fb.group({
        //     email: ['', Validators.compose([
        //         Validators.minLength(5),
        //         Validators.maxLength(160),
        //         Validators.required,
        //     ])],
        //     password: ['', Validators.compose([
        //         Validators.minLength(4),
        //         Validators.maxLength(20),
        //         Validators.required
        //     ])]
        // });
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.routeId = params['id'];
        });
        this.user = new User();
    }

    login() {
        this.message = null;
        
        this.httpService.builder('login').autenticate(this.user).then(() => {
            this.user.logado = true;
            sessionStorage.setItem("user", JSON.stringify(this.user));
            this.router.navigate(['/dashboard']);
        }).catch(error => {
            var erro = error.json();
            this.message = error.json().error;
        });
    }

    redirectToDashboard() {
        this.user.logado = false;
        sessionStorage.setItem("user", JSON.stringify(this.user));
        this.router.navigate(['/dashboard']);
    }
}