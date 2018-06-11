import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Component({
    moduleId: module.id,
    selector: "header",
    templateUrl: "header.component.html",
    styleUrls: ["../../../node_modules/bootstrap/dist/css/bootstrap.css"]
})
export class HeaderComponent  {
    constructor(private router: Router) { }
}