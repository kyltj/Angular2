import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Component({
    moduleId: module.id,
    selector: "footer",
    templateUrl: "footer.component.html",
    styleUrls: ["../../../node_modules/bootstrap/dist/css/bootstrap.css"]
})
export class FooterComponent  {
    constructor(private router: Router) { }
}