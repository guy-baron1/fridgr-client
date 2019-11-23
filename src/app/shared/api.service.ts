import { Injectable } from "@angular/core";
import { request, getJSON } from "tns-core-modules/http";

export interface IItem {
    _id: number;
    name: string;
    count: number;
    collectionId: string;
}

export interface ICollection {
    _id: number;
    name: string;
}

@Injectable({
    providedIn: "root"
})
export class ApiService {
    private apiPath: string = "https://fridgr.herokuapp.com";

    getCollections(): any {
        return getJSON(this.apiPath + "/getAllCollections");
    }

    getCollectionItems(id: number): /*IItem*/ void {
        //
    }
}
