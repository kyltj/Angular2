import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { routes } from "./app.routes";

import { ProductListComponent } from "./product/product-list/product-list.component";
import { ProductCreateEditComponent } from "./product/product-create-edit/product-create-edit.component";
import { ProductDeleteComponent } from "./product/product-delete/product-delete.component";
import { ProductService } from "./models/product/index";
import { ProductComponent } from "./product/product.component";
import { FooterComponent } from "./sharedComponent/footer/footer.component";
import { HeaderComponent } from "./sharedComponent/header/header.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        // ProductListComponent,
        // ProductCreateEditComponent,
        // ProductDeleteComponent,
         ProductComponent,
        FooterComponent,
        HeaderComponent],
    bootstrap: [AppComponent],
    providers: [ProductService]
})
export class AppModule { }
