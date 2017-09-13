import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AppHttpService } from '../app/app-http.service';

@Component({template: ''})
export class ProductRemoveComponent {

    public product: any = {};

    constructor (private httpService: AppHttpService,
                 private route: ActivatedRoute,
                 private router: Router) {}

    ngOnInit() {
        this.route.params.subscribe((params: any) => {
            this.remove(params.id);
        });
    }

    remove(id: number) {
        this.httpService.builder('pais').remove(id).then(() => {
            this.router.navigate(['/product']);
        })
    }
}