import mountCatalog from "shopCatalog/mount";
import mountHeader from "shopHeader/mount";
import { subscribe } from "shopCatalog/store";
import './add-catalog';

mountCatalog("#shop-catalogs");
mountHeader("#shop-header");

subscribe((payload) => {
    console.log("Catalogs has been updated!", payload?.catalogs);
});
