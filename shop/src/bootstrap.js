import mountCatalog from "shopCatalog/mount";
import "shopHeader/mount";
import { subscribe } from "shopCatalog/store";
import './add-catalog';

mountCatalog("#shop-catalogs");

subscribe((payload) => {
    console.log("Catalogs has been updated!", payload?.catalogs);
});
