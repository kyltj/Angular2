import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { HomeComponent } from "./home/home.component";

import { HeaderComponent } from "./header/header.component";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
    ],
   
    bootstrap: [AppComponent]
})
export class AppModule { }
