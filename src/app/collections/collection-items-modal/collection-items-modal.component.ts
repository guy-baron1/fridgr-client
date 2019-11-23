import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { ICollection } from "~/app/shared/api.service";

@Component({
    selector: "collection-items-modal",
    templateUrl: "collection-items-modal.component.html"
})
export class CollectionItemsModalComponent {
    collection: ICollection;

    constructor(private params: ModalDialogParams) {
        this.collection = params.context.collection;
    }

    close(response: string) {
        this.params.closeCallback(response);
    }

    // TODO: get collection items from api and add modal functionality

}
