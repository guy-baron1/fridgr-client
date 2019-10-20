import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ShoppingListsRoutingModule } from "./shopping-lists-routing.module";
import { ShoppingListsComponent } from "./shopping-lists.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ShoppingListsRoutingModule
    ],
    declarations: [
        ShoppingListsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ShoppingListsModule { }
