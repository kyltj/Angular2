import { Routes } from "@angular/router";
import { ProductComponent } from "./product/product.component";


export const routes: Routes = [
    {
        path: "",
        redirectTo: "product",
        pathMatch: "full"
    },
    { path: "product", component: ProductComponent },
];