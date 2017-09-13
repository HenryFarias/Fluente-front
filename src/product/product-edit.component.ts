import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AppHttpService } from '../app/app-http.service';

@Component({templateUrl: './product-edit.component.html'})
export class ProductEditComponent {

    public product: any = {};

    constructor (private httpService: AppHttpService,
                 private route: ActivatedRoute,
                 private router: Router) {}

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

    save() {
        let data = {name: this.product.name};

        this.httpService.builder('pais').update(this.product.id, data).then(() => {
            this.router.navigate(['/product/' + this.product.id]);
        })
    }
}