import { Component, OnInit } from '@angular/core';
import {ProductInfo} from './productinfo.model'

@Component({
    selector: 'product-data',
    templateUrl: './app/productinfo.html'
})
export class ProductInfoComponent implements OnInit {
    Message : string;
    product : ProductInfo;
    products : Array <ProductInfo>;
    categories : string[];

    constructor() { 
        this.Message = "The prouct Information system";
        this.product = new ProductInfo(0,'',0,'');
        this.products = new Array<ProductInfo>();
        this.categories = ['ECT','ETl','ETR','HR'];        
    }
    save(){
         this.products.push(this.product);
        }

    clear(){
         this.product = new ProductInfo(0,'',0,'');
    }
    ngOnInit() { }
}