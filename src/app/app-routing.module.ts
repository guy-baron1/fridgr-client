import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/(collectionsTab:collections/default//newsFeedTab:newsFeed/default//shoppingListsTab:shoppingLists/default)",
        pathMatch: "full"
    },

    {
        path: "collections",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/collections/collections.module").then((m) => m.CollectionsModule),
        outlet: "collectionsTab"
    },
    {
        path: "newsFeed",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/news-feed/news-feed.module").then((m) => m.NewsFeedModule),
        outlet: "newsFeedTab"
    },
    {
        path: "shoppingLists",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/shopping-lists/shopping-lists.module").then((m) => m.ShoppingListsModule),
        outlet: "shoppingListsTab"
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
