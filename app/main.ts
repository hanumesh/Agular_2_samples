import { NgModule } from '@angular/core';
// User to perform JIT compilation for loaded JS and HTML for binding
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
// perform AOT based pre compliation for NG2 modules
import {BrowserModule} from '@angular/platform-browser';

import {SimpleComponent}   from './simple.component';
import {ProductInfoComponent} from './productinfo.component';


// Registration of imported classs in bootstrap
@NgModule({
    imports: [BrowserModule],
    exports: [],
    declarations: [SimpleComponent,ProductInfoComponent],
    bootstrap: [SimpleComponent,ProductInfoComponent]             
})

// bootstrap: [SimpleComponent]  ,first component which is going to be loaded

// do not write complex logic in this
export class NameModule { }

// The call to Bootstrapper for all declarations / providers
platformBrowserDynamic().bootstrapModule(NameModule);
