import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppHttpService } from '../app/app-http.service';

@Component({templateUrl: './product-view.component.html'})
export class ProductViewComponent {

    public product: any = {};

    constructor (private httpService: AppHttpService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.params.subscribe((params: any) => {
            this.view(params.id);
        });
    }

    view(id: number) {
        this.httpService.builder('pais').view(id).then((res) => {
            this.product = res.data;
        })
    }

}