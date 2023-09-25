import mountCatalog from "shopCatalog/mount";
import "shopAds/mount";
import { subscribe } from "shopCatalog/store";
import "./index.scss";

mountCatalog("#shop-catalogs");

subscribe((payload) => {
    console.log("Catalogs has been updated!", payload?.catalogs);
});
