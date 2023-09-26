import mountCatalog from "shopCatalog/mount";
import mountCart from "shopCart/mount";
import "shopAds/mount";
import { subscribe } from "shopCatalog/store";
import "./index.scss";

mountCatalog("#shop-catalogs");
mountCart("#shop-cart");

subscribe((payload) => {
    console.log("Catalogs has been updated!", payload?.catalogs);
});
