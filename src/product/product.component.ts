import { Component } from '@angular/core';
import { AppHttpService } from '../app/app-http.service';

@Component({templateUrl: './product.component.html'})

export class ProductComponent {

    public products: any[];

    constructor (private httpService: AppHttpService) {

    }

    ngOnInit() {
        this.httpService.builder('pais').list().then((res) => {
            this.products = res.data;
        })
    }

}