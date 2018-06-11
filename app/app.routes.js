"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_component_1 = require("./product/product.component");
exports.routes = [
    {
        path: "",
        redirectTo: "product",
        pathMatch: "full"
    },
    { path: "product", component: product_component_1.ProductComponent },
];
//# sourceMappingURL=app.routes.js.map