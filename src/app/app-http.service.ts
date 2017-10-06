import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../models/user';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppHttpService {

    private url: string;

    constructor(private http: Http) {}

    builder (resource: string) {
        this.url = 'http://localhost/arquitetura-rest/public/' + resource;
        return this;
    }

    list() {
        let url = this.url;

        return this.http.get(url).toPromise().then((res) => {
            return res.json() || {};
        })
    }

    view(id: number) {
        let url = this.url + '/' + id;

        return this.http.get(url).toPromise().then((res) => {
            return res.json() || {};
        })
    }

    update(id: number, data: any) {
        let url = this.url + '/' + id;

        return this.http.put(url, data).toPromise().then((res) => {
            return res.json() || {};
        })
    }

    save(data: any) {
        let url = this.url;

        return this.http.post(url, data).toPromise().then((res) => {
            return res.json() || {};
        })
    }

    autenticate(user: User) {
        let url = this.url;
        
        return this.http.post(url, user).toPromise().then((res) => {
            return res.json() || {};
        })
    }

    create() {
        let url = this.url + '/create';

        return this.http.get(url).toPromise().then((res) => {
            return res.json() || {};
        })
    }

    getAll() {
        let url = this.url;

        return this.http.get(url).toPromise().then((res) => {
            return res.json() || {};
        })
    }

    remove(id: number) {
        let url = this.url + '/' + id;

        return this.http.delete(url).toPromise().then((res) => {
            return res.json() || {};
        })
    }
}

