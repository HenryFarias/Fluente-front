import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AppHttpService } from '../app/app-http.service';

@Component({templateUrl: './product-new.component.html'})
export class ProductNewComponent {

    public product: any = {};

    constructor (private httpService: AppHttpService,
                 private route: ActivatedRoute,
                 private router: Router) {}

    save() {
        let data = {name: this.product.name};

        this.httpService.builder('pais').save(data).then(() => {
            this.router.navigate(['/product/']);
        })
    }
}