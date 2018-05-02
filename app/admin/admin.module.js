"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var auth_component_1 = require("./auth.component");
var admin_component_1 = require("./admin.component");
var auth_guard_1 = require("./auth.guard");
var productEditor_component_1 = require("./productEditor.component");
var productTable_component_1 = require("./productTable.component");
var orderTable_component_1 = require("./orderTable.component");
var routing = router_1.RouterModule.forChild([
    { path: "auth", component: auth_component_1.AuthComponent },
    {
        path: "main", component: admin_component_1.AdminComponent, canActivate: [auth_guard_1.AuthGuard],
        children: [
            { path: "products/:mode/:id", component: productEditor_component_1.ProductEditorComponent },
            { path: "products/:mode", component: productEditor_component_1.ProductEditorComponent },
            { path: "products", component: productTable_component_1.ProductTableComponent },
            { path: "orders", component: orderTable_component_1.OrderTableComponent },
            { path: "**", redirectTo: "products" }
        ]
    },
    { path: "**", redirectTo: "auth" }
]);
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, routing],
            providers: [auth_guard_1.AuthGuard],
            declarations: [auth_component_1.AuthComponent, admin_component_1.AdminComponent,
                productTable_component_1.ProductTableComponent, productEditor_component_1.ProductEditorComponent, orderTable_component_1.OrderTableComponent]
        })
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
