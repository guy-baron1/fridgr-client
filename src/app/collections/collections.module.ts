import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ModalDialogService } from "nativescript-angular/modal-dialog";

import { CollectionsRoutingModule } from "./collections-routing.module";
import { CollectionsComponent } from "./collections.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { CollectionItemsModalComponent } from "./collection-items-modal/collection-items-modal.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CollectionsRoutingModule
    ],
    entryComponents: [CollectionItemsModalComponent],
    declarations: [
        CollectionsComponent,
        ItemDetailComponent,
        CollectionItemsModalComponent
    ],
    providers: [ModalDialogService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CollectionsModule { }
