import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './shop/cart/cart.component';
import { ShopPageComponent } from "./shop-page/shop-page.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { LoginComponent } from "./login/login.component";

import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

let routes = [
    { path: "", component: ShopPageComponent },
    { path: "checkout", component: CheckoutComponent },
    { path:"login",component:LoginComponent}

];

@NgModule({
    declarations: [
        AppComponent,
        ShopComponent,
        CartComponent,
        ShopPageComponent,
        CheckoutComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes, {
            useHash: true,
            enableTracing: false //for debugging of routes
        }),
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
