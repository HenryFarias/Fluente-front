import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ProductModule } from '../product/product.module';
import { LoginModule } from '../login/login.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { MessageService } from '../services/message.service';

// Rota de redirecionamento apenas. Redirecionando para a rota de produtos
const appRoutes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ProductModule,
    LoginModule,
    DashboardModule,
    HttpModule,
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [MessageService]
})

export class AppModule { }
