import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app.module";
//import { enableProdMode } from "@angular/core";
import { platformBrowser } from "@angular/platform-browser";
//import { AppModuleNgFactory } from "../aot/app/app.module.ngfactory";

//enableProdMode()

platformBrowserDynamic().bootstrapModule(AppModule);
//platformBrowser().bootstrapModuleFactory(AppModule);