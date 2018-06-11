import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService, Product } from "../models/product/index";

@Component({
    moduleId: module.id,
    selector: "product",
    templateUrl: "product.component.html",
    styleUrls: ["../../../node_modules/bootstrap/dist/css/bootstrap.css"]
})
export class ProductComponent  {
    constructor(private router: Router) { }
}