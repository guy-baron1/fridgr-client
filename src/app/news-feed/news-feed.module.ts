import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { NewsFeedRoutingModule } from "./news-feed-routing.module";
import { NewsFeedComponent } from "./news-feed.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NewsFeedRoutingModule
    ],
    declarations: [
        NewsFeedComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NewsFeedModule { }
