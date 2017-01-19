import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
// User to perform JIT compilation for loaded JS and HTML for binding
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// perform AOT based pre compliation for NG2 modules
import { BrowserModule } from '@angular/platform-browser';

import { SimpleComponent } from './simple.component';
import { ProductInfoComponent } from './productinfo.component';
import { ProductInfoFormComponent } from './productinfo.form.component';

// Registration of imported classs in bootstrap
@NgModule({
    imports: [BrowserModule,FormsModule],
    exports: [],
    declarations: [SimpleComponent, ProductInfoComponent,ProductInfoFormComponent],
    bootstrap: [ProductInfoFormComponent]
})
// bootstrap: [SimpleComponent]  ,first component which is going to be loaded
// do not write complex logic in this
export class NameModule { }

// The call to Bootstrapper for all declarations / providers
platformBrowserDynamic().bootstrapModule(NameModule);
