import { Component, OnInit, Input }   from '@angular/core';

import { FormDataService }            from './data/formData.service';

@Component ({
    selector:     'multi-step-wizard-app',
    templateUrl: 'Wizard.component.html'

    //  <link rel="stylesheet" href="content/css/riliwan-rabo.css" />
    // <link rel="stylesheet" href="content/css/style.css" />
    // <link rel="stylesheet" href="content/css/loading-bars.css" />
    // <link rel="stylesheet" href="content/css/form.css" />
})

export class WizardComponent implements OnInit {
    title = 'Multi-Step Wizard';
    @Input() formData;
    
    constructor(private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.formData = this.formDataService.getFormData();
        console.log(this.title + ' loaded!');
    }
}