import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AlertComponent } from './alert.component';

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        AlertComponent,
    ],
    exports: [
        AlertComponent,
    ]
})

export class AlertModule {}