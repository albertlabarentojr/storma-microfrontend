import { addCatalog } from "shopCatalog/store";

const randomId = () => (Math.random() + 1).toString(36).substring(7);
document.getElementById("addCatalog").addEventListener("click", () => {
    addCatalog(`New Catalog: ${randomId()}`);
});
