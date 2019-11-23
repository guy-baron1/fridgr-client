import { Component, OnInit } from "@angular/core";
import { ApiService, IItem, ICollection } from "../shared/api.service";

@Component({
    selector: "Collections",
    templateUrl: "./collections.component.html"
})
export class CollectionsComponent implements OnInit {
    collections: Array<ICollection>;
    mockCollections: Array<ICollection>;

    constructor(private apiService: ApiService) { }

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
}
