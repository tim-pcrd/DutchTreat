import { Component, OnInit } from '@angular/core';
import { DataService } from "../../shared/data.service";
import { Router } from '@angular/router';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    constructor(private data: DataService, private router: Router) { }

    ngOnInit() {
    }

    onCheckout() {
        if (this.data.LoginRequired) {
            //Force Login
            this.router.navigate(["login"]);
        }
        else {
            //Go to checkout
            this.router.navigate(["checkout"]);
        }
    }

}
