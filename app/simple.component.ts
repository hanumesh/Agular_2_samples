import { Component, OnInit } from '@angular/core';

@Component({              
    //   moduleId: module.id,
    //   selector: 'selector',
    selector: 'simple-data',
    template: `<h1> This is Angular 2 Application </h1>`
})
export class SimpleComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}

