import mountCatalog from "catalogs/mount";
import { subscribe, addCatalog } from "catalogs/store";

mountCatalog("#shop-catalogs");
subscribe((payload) => {
    console.log("Catalogs has been updated!", payload?.catalogs);
});

const randomId = () => (Math.random() + 1).toString(36).substring(7);
document.getElementById("addCatalog").addEventListener("click", () => {
    addCatalog(`New Catalog: ${randomId()}`);
});
