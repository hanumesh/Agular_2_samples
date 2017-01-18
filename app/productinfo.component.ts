import { Component, OnInit } from '@angular/core';
import {ProductInfo} from './productinfo.model'

@Component({
    selector: 'product-data',
    templateUrl: './app/productinfo.html'
})
export class ProductInfoComponent implements OnInit {
    product : ProductInfo;
    products : Array <ProductInfo>;
    categories : string[];

    constructor() { 
        this.product = new ProductInfo(0,'',0,'');
        this.products = new Array<ProductInfo>();
        this.categories = ['ECT','ETl','ETR','HR'];        
    }
    ngOnInit() { }
}