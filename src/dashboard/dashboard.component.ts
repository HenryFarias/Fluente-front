import { Component, ViewChild, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

import { AppHttpService } from '../app/app-http.service';
import { User } from '../models/user';
import { Notificacao } from '../models/notificacao';
import { Nivel } from '../models/nivel';
import { Idioma } from '../models/idioma';
import { ModalComponent } from '../util/modal/modal.component';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/observable/throw';

declare let google: any;

@Component({templateUrl: './dashboard.component.html'})
export class DashboardComponent {

    private user: User;
    public niveis: Nivel;
    public notificacoes: Notificacao;
    public idiomas: Idioma;
    public message:string = null;

    @ViewChild(ModalComponent) 
    public modais: QueryList<ModalComponent>;

    @ViewChild(ModalComponent)
    public modal: ModalComponent;

    // @ViewChild(ModalComponent)
    // public modais: QueryList<ModalComponent>;

    constructor (
        private httpService: AppHttpService, 
        private router: Router,
        private http: Http
    ) {}

    ngOnInit() {
        
        // this.modais.forEach(el => {
        //     console.log(el);
        // });

        console.log(this.modal);
        console.log(this.modais);

        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });

        this.user = JSON.parse(sessionStorage.getItem("user"));
        if (!this.user.logado) {
            this.httpService.builder('user').create().then((res) => {
                this.notificacoes = res.data.notificacoes;
                this.niveis = res.data.niveis;
                this.idiomas = res.data.idiomas;
            });

            this.openModal();
        }
    }

    public openModal() {
        this.modais.last.open();
    }

    public saveUser() {
        this.httpService.builder('user').save(this.user).then(() => {
            this.user.logado = true;
            sessionStorage.setItem("user", JSON.stringify(this.user));
            this.modal.close();
        }).catch(error => {
            var erro = error.json();
            this.message = error.json().error;
            console.log(erro.error);
        });
    }

    public viaCep() {
        if (this.user.endereco.cep) {
            let url = "https://viacep.com.br/ws/" + this.user.endereco.cep + "/json/";
            
            this.http.get(url).toPromise().then((res) => {
                var endereco = res.json();
                this.user.endereco.rua = endereco.logradouro;
                this.user.endereco.cidade.name = endereco.localidade;
                this.user.endereco.bairro = endereco.bairro;
                this.user.endereco.cidade.estado.name = endereco.uf;
            })
        }
    }
}