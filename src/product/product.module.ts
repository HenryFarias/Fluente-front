import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LayoutModule } from '../layout/layout.module';
import { ProductComponent } from './product.component';
import { AppHttpService } from '../app/app-http.service';
import { ProductViewComponent } from './product-view.component';
import { ProductEditComponent } from './product-edit.component';
import { ProductNewComponent } from './product-new.component';
import { ProductRemoveComponent } from './product-remove.component';


const appRoutes: Routes = [
    { path: 'product', children:[
        {path: '', component: ProductComponent},
        {path: 'new', component: ProductNewComponent},
        {path: ':id', component: ProductViewComponent},
        {path: ':id/edit', component: ProductEditComponent},
        {path: ':id/remove', component: ProductRemoveComponent},
    ]}
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        LayoutModule
    ],
    declarations: [
        ProductComponent,
        ProductViewComponent,
        ProductEditComponent,
        ProductNewComponent,
        ProductRemoveComponent
    ],
    providers: [AppHttpService]
})

export class ProductModule {}