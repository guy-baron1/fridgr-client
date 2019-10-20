import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/(homeTab:home/default//newsFeedTab:newsFeed/default//shoppingListsTab:shoppingLists/default)",
        pathMatch: "full"
    },

    {
        path: "home",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule),
        outlet: "homeTab"
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
