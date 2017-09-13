import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';


declare let $: any;

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {

    @ViewChild('modal')
    public modal: ElementRef;

    constructor() {}

    ngOnInit() {}

    open() {
        $(this.modal.nativeElement).modal({
            keyboard: false,
            backdrop: "static"
        });
    }

    close() {
        $(this.modal.nativeElement).modal('hide');
    }
}