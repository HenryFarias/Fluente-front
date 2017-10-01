import {Component, Input, OnInit, ViewChild, ElementRef} from '@angular/core';

declare let $: any;

@Component({
    selector: 'alert',
    templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit {

    @Input()
    public action = 'danger';

    @ViewChild('alert')
    public divAlert: ElementRef;

    constructor() {}

    ngOnInit() {
        setTimeout(() => {
            $(this.divAlert.nativeElement).alert('close');
        }, 5000);
    }
}