import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ApiService, IItem, ICollection } from "../shared/api.service";
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { CollectionItemsModalComponent } from "./collection-items-modal/collection-items-modal.component";

@Component({
    selector: "Collections",
    templateUrl: "./collections.component.html"
})
export class CollectionsComponent implements OnInit {
    collections: Array<ICollection>;
    mockCollections: Array<ICollection>;

    constructor(private apiService: ApiService,
                private modal: ModalDialogService,
                private vcRef: ViewContainerRef) { }

    ngOnInit(): void {
        this.apiService.getCollections().then((collections) => {
            this.collections = collections.map((collection) => {
                return {
                    name: collection.name,
                    _id: collection._id
                };
            });
        });
    }

    openCollectionItemsModal(event): void {
        const selectedCollection: ICollection = this.collections[event.index];
        const options = {
            context: {collection: selectedCollection},
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(CollectionItemsModalComponent, options).then((response) => { /**/ });
    }
}
