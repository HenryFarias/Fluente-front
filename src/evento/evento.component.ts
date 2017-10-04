import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

import { AppHttpService } from '../app/app-http.service';
import { User } from '../models/user';

declare let google: any;

@Component({templateUrl: './evento.component.html'})
export class EventoComponent {

    private user: User;
    public message:string = null;

    constructor (
        private httpService: AppHttpService,
        private http: Http
    ) {}

    ngOnInit() {}
}