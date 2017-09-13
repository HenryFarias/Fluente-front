import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';


const appRoutes: Routes = [
    { path: '' , component: HeaderComponent, outlet: 'header'},
    { path: '' , component: FooterComponent, outlet: 'footer'}
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
    ],
    exports: [ 
        HeaderComponent,
        FooterComponent,
    ]
})

export class LayoutModule {}