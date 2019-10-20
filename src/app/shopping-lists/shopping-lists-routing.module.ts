import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ShoppingListsComponent } from "./shopping-lists.component";

const routes: Routes = [
    { path: "default", component: ShoppingListsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ShoppingListsRoutingModule { }
