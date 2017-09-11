import { Component, OnInit } from '@angular/core';

import { AlertService } from '../../services/alert.service';
import {MdSnackBar} from "@angular/material";

@Component({
    moduleId: module.id,
    selector: 'app-alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit {
    message: any;

    constructor(private alertService: AlertService, private snackBar: MdSnackBar ) { }
    ngOnInit() {
        this.alertService.getMessage().subscribe(message => {
            this.message = message;
            if (message) {
                this.snackBar.open(message.text, null, {
                    duration: 3000,
                    extraClasses: ['alert', 'error-alert']
                });
            }
        });
    }
}