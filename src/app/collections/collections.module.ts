import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CollectionsRoutingModule } from "./collections-routing.module";
import { CollectionsComponent } from "./collections.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CollectionsRoutingModule
    ],
    declarations: [
        CollectionsComponent,
        ItemDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CollectionsModule { }
