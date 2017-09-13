import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppHttpService } from '../app/app-http.service';
import { LayoutModule } from '../layout/layout.module';
import { DashboardComponent } from './dashboard.component';
import { ModalModule } from '../util/modal/modal.module';
import { AlertModule } from '../util/alert/alert.module';


const appRoutes: Routes = [
    {path: 'dashboard', children:[
        { path: '', component: DashboardComponent}
    ]}
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        LayoutModule,
        AlertModule,
        ModalModule,
    ],
    declarations: [
        DashboardComponent,
    ],
    providers: [AppHttpService]
})

export class DashboardModule {}