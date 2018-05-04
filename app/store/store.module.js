"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var store_component_1 = require("./store.component");
var model_module_1 = require("../model/model.module");
var counter_directive_1 = require("./counter.directive");
var cartSummary_component_1 = require("./cartSummary.component");
var cartDetail__component_1 = require("./cartDetail. component");
var checkout_component_1 = require("./checkout.component");
var router_1 = require("@angular/router");
var StoreModule = (function () {
    function StoreModule() {
    }
    StoreModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, model_module_1.ModelModule, router_1.RouterModule],
            declarations: [store_component_1.StoreComponent, counter_directive_1.CounterDirective, cartSummary_component_1.CartSummaryComponent,
                cartDetail__component_1.CartDetailComponent, checkout_component_1.CheckoutComponent],
            exports: [store_component_1.StoreComponent, cartDetail__component_1.CartDetailComponent, checkout_component_1.CheckoutComponent]
        })
    ], StoreModule);
    return StoreModule;
}());
exports.StoreModule = StoreModule;
