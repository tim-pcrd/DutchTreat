import { Component, OnInit } from '@angular/core';
import { DataService } from "../shared/data.service";
import { Product } from '../shared/product';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
    public products: Product[] = [];

    constructor(private data: DataService) {
    }

    ngOnInit() {
        this.data.loadProducts()
            .subscribe(success => {
                if (success) {
                    this.products = this.data.products;
                }
            })

        this.data.mainTitle = "pizza";
    }

    addProduct(product: Product) {
        this.data.addToOrder(product);
    }

}
