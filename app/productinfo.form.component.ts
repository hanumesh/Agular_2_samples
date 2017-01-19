import { Component, OnInit } from '@angular/core';
import {ProductInfo} from './productinfo.model'

@Component({
    selector: 'product-form',
    templateUrl: './app/productinfoform.html'
})
export class ProductInfoFormComponent implements OnInit {
    Message : string;
    product : ProductInfo;
    products : Array <ProductInfo>;
    categories : string[];
    isSubmited : boolean;
    constructor() {  
        this.Message = "The prouct Information system";
        this.product = new ProductInfo(0,'',0,'');
        this.products = new Array<ProductInfo>();
        this.categories = ['ECT','ETl','ETR','HR'];  
        this.isSubmited = false;      
    }
    save(){
         this.products.push(this.product);
         this.isSubmited = true; 
        }

    clear(){
         this.product = new ProductInfo(0,'',0,'');
    }
    loadForm(){
         this.product = new ProductInfo(0,'',0,'');
         this.isSubmited = false;
    }
    ngOnInit() { }
}