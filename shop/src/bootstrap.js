import mountCatalog from "catalogs/mount";
import { subscribe } from "catalogs/store";
import './add-catalog';

mountCatalog("#shop-catalogs");
subscribe((payload) => {
    console.log("Catalogs has been updated!", payload?.catalogs);
});
